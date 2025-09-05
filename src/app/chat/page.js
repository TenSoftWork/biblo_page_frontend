"use client"; //test
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// 고유 ID 생성 함수
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const INITIAL_MESSAGE = {
  id: "initial-message", // 고유 ID 추가
  text: "비블로(Biblo)와 관련하여 궁금하신 점이 있으시면 편하게 질문해 주세요 👋",
  isUser: false,
  timestamp: Date.now()
};

const ChatMessage = ({ message, isUser, isLoading, messageId, onFeedback, feedback, id }) => (
  <motion.div
    key={id} // 고유 ID를 키로 사용
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 w-full`}
  >
    <div
      className={`flex items-start gap-2 max-w-[90%] sm:max-w-[80%] ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={isUser ? "/user.png" : "/chatbot.png"}
          alt={isUser ? "User Avatar" : "Bot Avatar"}
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
          isUser
            ? "bg-gradient-to-r from-[#5967B5] to-[#908EED] text-white shadow-lg"
            : "bg-white/50 backdrop-blur-sm text-[#465478] shadow-[0_2px_8px_-2px_rgba(89,103,181,0.15)]"
        }`}
      >
        <p className="text-sm sm:text-base">
          {isLoading ? (
            <motion.span
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center gap-1"
            >
              Thinking
              <span className="inline-flex gap-1">
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                >
                  .
                </motion.span>
              </span>
            </motion.span>
          ) : (
            message
          )}
        </p>
        
        {/* 피드백 버튼 (AI 응답에만 표시) */}
        {!isUser && messageId && onFeedback && (
          <div className={`flex justify-end mt-2 gap-2 ${feedback !== null ? 'opacity-50' : 'opacity-100'}`}>
            <button 
              onClick={() => onFeedback(messageId, 1)}
              disabled={feedback !== null}
              className={`text-xs px-2 py-1 rounded ${
                feedback === 1 
                  ? 'bg-[#5967B5] text-white' 
                  : 'bg-white/70 text-[#5967B5] hover:bg-[#5967B5]/10'
              } transition-colors disabled:cursor-not-allowed`}
            >
              👍 Like
            </button>
            <button 
              onClick={() => onFeedback(messageId, 0)}
              disabled={feedback !== null}
              className={`text-xs px-2 py-1 rounded ${
                feedback === 0 
                  ? 'bg-[#5967B5] text-white' 
                  : 'bg-white/70 text-[#5967B5] hover:bg-[#5967B5]/10'
              } transition-colors disabled:cursor-not-allowed`}
            >
              👎 Dislike
            </button>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chatMessages");
      return saved ? JSON.parse(saved) : [INITIAL_MESSAGE];
    }
    return [INITIAL_MESSAGE];
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [streamingResponse, setStreamingResponse] = useState("");
  const [currentStreamingMessageId, setCurrentStreamingMessageId] = useState(null);
  const [conversationHistory, setConversationHistory] = useState([]); // 서버로부터 받은 대화 기록
  
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const webSocketRef = useRef(null);
  const streamWebSocketRef = useRef(null);
  const pingIntervalRef = useRef(null);
  const userInfoCalledRef = useRef(false);
  
  // API 기본 URL 정의 (상대 경로 사용)
  const API_BASE_URL = 'https://biblo.duckdns.org';
  
  // WebSocket URL 생성 함수 (프로토콜 자동 감지)
  const getWebSocketUrl = (path) => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${protocol}//biblo.duckdns.org${path}`;
  };
  
  // 컴포넌트 마운트 시 실행
  useEffect(() => {
    // 세션 ID 로드
    const savedSessionId = localStorage.getItem("sessionId");
    if (savedSessionId) {
      setSessionId(savedSessionId);
    }
    
    // 컴포넌트 언마운트 시 웹소켓 정리
    return () => {
      disconnectWebSocket();
      disconnectStreamWebSocket();
    };
  }, []);
  
  // sessionId가 변경될 때 /extract_user_info API를 최초 1회 호출
  useEffect(() => {
    if (sessionId && !userInfoCalledRef.current) {
      fetch(`${API_BASE_URL}/extract_user_info`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("User info response:", data);
          
          // 세션이 만료되었거나 존재하지 않는 경우
          if (data.status === "expired") {
            console.log("세션이 만료되었습니다. 새 세션을 시작합니다.");
            // 세션 ID와 메시지 초기화 (새 세션 시작)
            setSessionId(null);
            // 로컬 스토리지의 세션 ID 제거
            localStorage.removeItem("sessionId");
            // 메시지는 초기 메시지만 유지 (UI에 표시)
            setMessages([INITIAL_MESSAGE]);
            userInfoCalledRef.current = false;
          } else {
            console.log("User info updated successfully");
            userInfoCalledRef.current = true;
            // 세션 ID 저장
            localStorage.setItem("sessionId", sessionId);
          }
        })
        .catch((error) => {
          console.error("Error checking session:", error);
          // 오류가 발생해도 세션을 초기화하지 않고 계속 진행
          userInfoCalledRef.current = true;
        });
    }
  }, [sessionId]);
  
  // 세션 ID가 변경될 때 웹소켓 연결
  useEffect(() => {
    if (sessionId) {
      connectWebSocket(sessionId);
      
      // 페이지 언로드 시 세션 종료 처리
      const handleUnload = () => {
        disconnectWebSocket();
        disconnectStreamWebSocket();
      };
      
      window.addEventListener('beforeunload', handleUnload);
      return () => {
        window.removeEventListener('beforeunload', handleUnload);
      };
    }
  }, [sessionId]);
  
  // 채팅 기록이 업데이트될 때마다 스크롤을 아래로 이동
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, streamingResponse]);
  
  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);
  
  // 서버에서 받은 대화 기록과 로컬 상태를 동기화
  useEffect(() => {
    if (conversationHistory.length > 0) {
      // 메시지 목록 재구성
      const newMessages = [];
      
      // 초기 메시지는 항상 포함
      newMessages.push(INITIAL_MESSAGE);
      
      // 서버 대화 기록에서 메시지 추출
      conversationHistory.forEach(msg => {
        const isUserMsg = msg.role === "user";
        const msgObj = {
          id: msg.id || generateUniqueId(), // 고유 ID 추가
          text: msg.content,
          isUser: isUserMsg,
          timestamp: msg.timestamp || Date.now() // 타임스탬프가 없는 경우 현재 시간 사용
        };
        
        // AI 메시지인 경우 ID와 피드백 정보 추가
        if (!isUserMsg) {
          msgObj.message_id = msg.id; // 피드백용 메시지 ID
          msgObj.feedback = null; // 피드백 정보는 별도로 관리
        }
        
        newMessages.push(msgObj);
      });
      
      // 중복 메시지 제거 및 시간순 정렬
      const uniqueMessages = [];
      const seenIds = new Set(); // 텍스트 대신 ID로 중복 체크
      
      // INITIAL_MESSAGE는 항상 포함
      uniqueMessages.push(INITIAL_MESSAGE);
      seenIds.add(INITIAL_MESSAGE.id);
      
      // 나머지 메시지들을 시간순으로 정렬하고 ID 기반으로 중복 제거
      newMessages
        .filter(msg => msg.id !== INITIAL_MESSAGE.id)
        .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0))
        .forEach(msg => {
          if (!seenIds.has(msg.id)) {
            uniqueMessages.push(msg);
            seenIds.add(msg.id);
          }
        });
      
      // 상태 업데이트
      setMessages(uniqueMessages);
    }
  }, [conversationHistory]);
  
  // 웹소켓 연결 함수
  const connectWebSocket = (sid) => {
    // 기존 웹소켓이 있으면 정리
    disconnectWebSocket();
    
    // 새 웹소켓 연결
    const ws = new WebSocket(getWebSocketUrl(`/ws/${sid}`));
    
    ws.onopen = () => {
      console.log("WebSocket 연결 성공:", sid);
      
      // 연결 유지를 위한 ping 메시지 전송 (30초마다)
      pingIntervalRef.current = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("ping");
        }
      }, 30000);
    };
    
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        // 세션 상태 처리
        if (data.type === "session_status") {
          if (data.status === "active" && data.conversation_history) {
            // 서버로부터 받은 대화 기록 저장
            setConversationHistory(data.conversation_history);
          } else if (data.status === "not_found") {
            // 세션을 찾을 수 없는 경우
            console.log("세션을 찾을 수 없습니다. 새 세션을 시작합니다.");
            setSessionId(null);
            localStorage.removeItem("sessionId");
            setMessages([INITIAL_MESSAGE]);
          }
        }
        // 세션이 만료된 경우 처리
        else if (data.type === "session_expired") {
          console.log("세션 만료 메시지 수신:", data.message);
          // 세션 초기화 (새 세션 시작)
          setSessionId(null);
          localStorage.removeItem("sessionId");
          // 메시지는 초기 메시지만 유지
          setMessages([INITIAL_MESSAGE]);
          userInfoCalledRef.current = false;
          // WebSocket 연결 종료
          disconnectWebSocket();
        }
      } catch (e) {
        // 일반 텍스트 메시지 처리 (ping 응답 등)
        console.log("WebSocket 메시지:", event.data);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket 연결 종료");
      clearInterval(pingIntervalRef.current);
    };
    
    ws.onerror = (error) => {
      console.error("WebSocket 오류:", error);
    };
    
    // 웹소켓 참조 저장
    webSocketRef.current = ws;
  };
  
  // 스트리밍 웹소켓 연결 함수
  const connectStreamWebSocket = (userPrompt) => {
    disconnectStreamWebSocket();
    
    const ws = new WebSocket(getWebSocketUrl('/stream'));
    
    ws.onopen = () => {
      console.log("스트리밍 WebSocket 연결 성공");
      // 연결 후 메시지 전송
      ws.send(JSON.stringify({
        prompt: userPrompt,
        session_id: sessionId
      }));
      
      // 스트리밍 응답 초기화
      setStreamingResponse("");
      setIsLoading(true);
    };
    
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === "session_info") {
          // 세션 정보 처리
          setSessionId(data.session_id);
          // 세션 ID 저장 (스트리밍 응답 시)
          localStorage.setItem("sessionId", data.session_id);
          userInfoCalledRef.current = false; // userInfo API를 다시 호출할 수 있도록 함
        }
        else if (data.type === "user_message_saved") {
          // 서버에서 사용자 메시지가 저장되었음을 확인
          console.log(`사용자 메시지 저장 확인: ${data.message_id} - ${data.content}`);
        }
        else if (data.type === "message_start") {
          // 메시지 시작 처리 - ID 저장
          setCurrentStreamingMessageId(data.message_id);
          console.log("메시지 ID 설정:", data.message_id);
        }
        else if (data.type === "token") {
          // 토큰 추가
          setStreamingResponse(prev => prev + data.token);
        }
        else if (data.type === "message_end") {
          // 메시지 완료 처리 - 서버로부터 전달받은 메시지 ID 사용
          setMessages(prev => [...prev, {
            id: generateUniqueId(), // 고유 ID 생성
            text: data.full_response,
            isUser: false,
            message_id: data.message_id, // 서버와 동일한 ID 사용 (피드백용)
            feedback: null,
            timestamp: Date.now() // 현재 시간 기록
          }]);
          
          console.log("메시지 완료, ID:", data.message_id);
          
          // 전체 대화 기록 업데이트
          if (data.conversation_history) {
            setConversationHistory(data.conversation_history);
          }
          
          setStreamingResponse("");
          setCurrentStreamingMessageId(null);
          setIsLoading(false);
          disconnectStreamWebSocket();
        }
        else if (data.error) {
          console.error("스트리밍 오류:", data.error);
          setIsLoading(false);
          disconnectStreamWebSocket();
          
          // 오류 메시지 표시
          setMessages(prev => [...prev, {
            id: generateUniqueId(), // 고유 ID 생성
            text: "죄송합니다. 현재 연결에 문제가 있습니다. 잠시 후 다시 시도해 주세요.",
            isUser: false,
            timestamp: Date.now() // 현재 시간 기록
          }]);
        }
      } catch (error) {
        console.error("WebSocket 메시지 처리 오류:", error);
      }
    };
    
    ws.onclose = () => {
      console.log("스트리밍 WebSocket 연결 종료");
      if (isLoading) setIsLoading(false);
    };
    
    ws.onerror = (error) => {
      console.error("스트리밍 WebSocket 오류:", error);
      setIsLoading(false);
    };
    
    streamWebSocketRef.current = ws;
  };
  
  // 웹소켓 연결 해제 함수
  const disconnectWebSocket = () => {
    if (webSocketRef.current) {
      clearInterval(pingIntervalRef.current);
      webSocketRef.current.close();
      webSocketRef.current = null;
    }
  };
  
  // 스트리밍 웹소켓 연결 해제 함수
  const disconnectStreamWebSocket = () => {
    if (streamWebSocketRef.current) {
      streamWebSocketRef.current.close();
      streamWebSocketRef.current = null;
    }
  };
  
  // 명시적 세션 종료 및 채팅 초기화
  const startNewChat = async () => {
    // 기존 세션 종료
    if (sessionId) {
      try {
        await fetch(`${API_BASE_URL}/end_session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ session_id: sessionId })
        });
        
        // 웹소켓 및 세션 정리
        disconnectWebSocket();
        disconnectStreamWebSocket();
        
        console.log("세션이 종료되었습니다.");
      } catch (error) {
        console.error("세션 종료 오류:", error);
      }
    }
    
    // 상태 초기화
    setSessionId(null);
    setMessages([INITIAL_MESSAGE]);
    setStreamingResponse("");
    setInputValue("");
    setConversationHistory([]);
    userInfoCalledRef.current = false;
    
    // 로컬 스토리지 정리
    localStorage.removeItem("chatMessages");
    localStorage.removeItem("sessionId");
    
    // 입력 포커스
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  // 폼 제출 핸들러
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    // 사용자 메시지를 대화 기록에 추가 (고유 ID 생성)
    const userMessage = inputValue;
    const userMessageObj = { 
      id: generateUniqueId(), // 고유 ID 생성
      text: userMessage, 
      isUser: true,
      timestamp: Date.now()
    };
    
    // 메시지 목록에 사용자 메시지 추가
    setMessages(prev => [...prev, userMessageObj]);
    setInputValue("");
    
    // WebSocket 스트리밍 방식 사용
    connectStreamWebSocket(userMessage);
  };
  
  // 피드백 제출 핸들러
  const handleFeedback = async (messageId, feedbackValue) => {
    if (!sessionId || !messageId) return;
    
    console.log(`피드백 제출: 메시지 ID ${messageId}, 값 ${feedbackValue}`);
    
    try {
      // 피드백 UI 업데이트 (낙관적 업데이트)
      setMessages(prev => 
        prev.map(msg => 
          msg.message_id === messageId 
            ? { ...msg, feedback: feedbackValue } 
            : msg
        )
      );
      
      // 피드백 API 호출
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          session_id: sessionId,
          message_id: messageId,
          feedback_value: feedbackValue
        })
      });
      
      if (!response.ok) {
        throw new Error("피드백 제출에 실패했습니다.");
      }
      
      const result = await response.json();
      console.log("피드백 제출 성공:", result);
    } catch (error) {
      console.error("피드백 제출 오류:", error);
      
      // 오류 시 피드백 UI 롤백
      setMessages(prev => 
        prev.map(msg => 
          msg.message_id === messageId 
            ? { ...msg, feedback: null } 
            : msg
        )
      );
    }
  };
  
  // Prevent scroll propagation
  const handleWheel = (e) => {
    const container = chatContainerRef.current;
    if (!container) return;

    const isAtTop = container.scrollTop === 0;
    const isAtBottom =
      container.scrollHeight - container.scrollTop === container.clientHeight;

    // Allow scrolling within the container
    if (
      (e.deltaY > 0 && !isAtBottom) || // Scrolling down and not at bottom
      (e.deltaY < 0 && !isAtTop) // Scrolling up and not at top
    ) {
      e.stopPropagation();
    }
  };

  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <div className="min-h-screen bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat py-24 sm:py-24 md:py-32 px-2 sm:px-4">
          <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] sm:min-h-[500px]">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={startNewChat}
                className="bg-white text-[#5967B5] border border-[#5967B5]/20 px-6 py-2.5 rounded-full font-medium hover:bg-[#5967B5]/5 transition-colors"
              >
                새로운 대화 시작
              </button>
              
              {sessionId && (
                <div className="text-xs text-[#5967B5]/70 bg-white/50 px-3 py-1 rounded-full">
                  Session: {sessionId.substring(0, 8)}...
                </div>
              )}
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden mx-auto max-w-[98%] sm:max-w-full h-[calc(100vh-16rem)] sm:h-auto">
              <div
                ref={chatContainerRef}
                onWheel={handleWheel}
                className="h-[calc(100%-4rem)] sm:h-[450px] md:h-[70vh] overflow-y-auto p-3 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-[#5967B5]/20 scrollbar-track-transparent hover:scrollbar-thumb-[#5967B5]/30 transition-colors"
                style={{ scrollbarGutter: "stable" }}
              >
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id} // index 대신 고유 ID 사용
                    id={message.id}
                    message={message.text}
                    isUser={message.isUser}
                    isLoading={false}
                    messageId={message.message_id}
                    feedback={message.feedback}
                    onFeedback={!message.isUser ? handleFeedback : undefined}
                  />
                ))}
                
                {/* 스트리밍 응답 표시 */}
                {streamingResponse && (
                  <ChatMessage 
                    key="streaming-response"
                    id="streaming-response"
                    message={streamingResponse} 
                    isUser={false} 
                    isLoading={false}
                  />
                )}
                
                {/* 로딩 표시 (스트리밍 없을 때) */}
                {isLoading && !streamingResponse && (
                  <ChatMessage 
                    key="loading-indicator"
                    id="loading-indicator"
                    message="" 
                    isUser={false} 
                    isLoading={true}
                  />
                )}
              </div>

              <form
                onSubmit={handleSendMessage}
                className="border-t border-[#6A71A8]/10 p-3 sm:p-4 bg-white/50"
              >
                <div className="flex gap-2 h-full">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask Biblo anything..."
                    disabled={isLoading}
                    className="flex-1 bg-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-base text-[#465478] placeholder-[#465478]/50 focus:outline-none focus:ring-2 focus:ring-[#5967B5]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="hidden sm:block bg-[#5967B5] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#4A579E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    보내기
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="sm:hidden px-4 bg-[#5967B5] text-white rounded-full hover:bg-[#4A579E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </main>
      <Footer />
    </>
  );
};

export default Chat;