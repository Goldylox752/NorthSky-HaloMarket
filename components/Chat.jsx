"use client";

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Welcome to Halo Marketplace. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  function sendMessage(e) {
    e.preventDefault();

    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: input,
      },
    ]);

    setInput("");
  }

  return (
    <div className="max-w-3xl mx-auto rounded-xl border bg-white shadow">

      <div className="h-[500px] overflow-y-auto p-6 space-y-4">

        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <div
              className={`inline-block rounded-lg px-4 py-3 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

      </div>

      <form
        onSubmit={sendMessage}
        className="border-t p-4 flex gap-3"
      >
        <input
          className="flex-1 border rounded-lg px-4 py-2"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          Send
        </button>

      </form>

    </div>
  );
}
