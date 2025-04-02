"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const INITIAL_MESSAGE = {
  text: "Hi there! 👋 How can I help you today?",
  isUser: false,
};

const ChatMessage = ({ message, isUser, isLoading }) => (
  <motion.div
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
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const startNewChat = () => {
    setMessages([INITIAL_MESSAGE]);
    localStorage.removeItem("chatMessages");
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Get last 10 messages for context
      const lastMessages = [...messages, userMessage].slice(-10);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: lastMessages,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.message, isUser: false }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
            <button
              onClick={startNewChat}
              className="bg-white text-[#5967B5] border border-[#5967B5]/20 px-6 py-2.5 rounded-full font-medium hover:bg-[#5967B5]/5 transition-colors mx-auto mb-4"
            >
              Start New Chat
            </button>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden mx-auto max-w-[98%] sm:max-w-full h-[calc(100vh-16rem)] sm:h-auto">
              <div
                ref={chatContainerRef}
                onWheel={handleWheel}
                className="h-[calc(100%-4rem)] sm:h-[450px] md:h-[70vh] overflow-y-auto p-3 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-[#5967B5]/20 scrollbar-track-transparent hover:scrollbar-thumb-[#5967B5]/30 transition-colors"
                style={{ scrollbarGutter: "stable" }}
              >
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message.text}
                    isUser={message.isUser}
                    isLoading={
                      isLoading &&
                      index === messages.length - 1 &&
                      !message.isUser
                    }
                  />
                ))}
                {isLoading && (
                  <ChatMessage message="" isUser={false} isLoading={true} />
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
                    disabled={isLoading}
                    className="hidden sm:block bg-[#5967B5] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#4A579E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
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
