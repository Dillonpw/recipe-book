{/*"use client";
import { FormEvent, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Chat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/AI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();

      if (data.choices && data.choices.length > 0) {
        setResponse(data.choices[0].message.content);
      } else {
        setResponse("No response from the RecipeBook AI.");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("There was an error fetching the AI response.");
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Chat with GPT</h1>
      <form onSubmit={handleSubmit} className="m-10">
        <div className="mb-4">
          <label htmlFor="message" className="text-4xl">
            Message:
          </label>
          <Textarea
            className="border"
            id="message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>
        <Button className="mt-4" type="submit">
          Send
        </Button>
      </form>
      {response && <div className="m-10 rounded border p-4">{response}</div>}
    </>
  );
}
*/}