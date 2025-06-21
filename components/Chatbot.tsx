"use client";
import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "ai", text: data.reply },
    ]);
    setInput("");
  };

  return (
    <div id="chatbot" className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold text-green-400 text-center">
          CarePulse Assistant
        </h1>

        <div className="bg-zinc-900 p-4 rounded-lg h-[60vh] overflow-y-auto space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${
                msg.role === "ai"
                  ? "bg-green-900 text-green-100"
                  : "bg-zinc-800 text-white"
              }`}
            >
              <strong className="mr-2">{msg.role === "ai" ? "AI" : "You"}:</strong>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 bg-zinc-800 border border-zinc-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Ask your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
          />
          <button
            onClick={sendMessage}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}


