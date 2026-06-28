import { useState, useRef, useEffect } from "react";
import { X, Bot, Send, ChevronDown } from "lucide-react";

const PORTFOLIO_KB: Record<string, string> = {
  about:
    "Udhaya Prakash V is a B.Tech student in Artificial Intelligence & Data Science. He specialises in Data Analytics and UI/UX Design, blending structured scientific inquiry with intuitive digital aesthetics. He is passionate about turning raw data into clear stories and crafting interfaces that make those stories feel effortless.",
  skills_data:
    "Data Analytics skills: Python, SQL, Excel, Power BI, Tableau, Statistics, Data Visualisation, and Machine Learning fundamentals.",
  skills_uiux:
    "UI/UX Design skills: Figma, Wireframing, Prototyping, Design Systems, User Research, Responsive Layouts, and Interaction Design.",
  skills_all:
    "Core skills include Python, SQL, Excel, Power BI, Tableau, Figma, Wireframing, Prototyping, Design Systems, User Research, and Data Visualisation.",
  projects:
    "Projects:\n1. **Food Waste System** — AI-based smart system to reduce food waste using prediction & optimisation.\n2. **Bus Tracking Website** — Real-time bus tracking web application.\n3. **AutoFinder App** — Mobile/web app for vehicle discovery.\n4. **UI/UX Figma Prototype** — Modern, user-friendly design prototype.\n5. **Insurance Management Desktop App** — Dashboard-style Figma UI/UX design.\n6. **Responsive UI/UX Design Prototype** — Clean responsive design system prototype.",
  experience:
    "Internship Experience:\n1. **White and Box – Tech Products & Services** (Bengaluru) — UI/UX Design Intern, Dec 2025 – Jan 2026.\n2. **MAKE Labs** (Krishnagiri & Bengaluru) — UI/UX Design Intern, June 2025 – July 2025.",
  education:
    "Udhaya Prakash V is pursuing a B.Tech in Artificial Intelligence & Data Science.",
  contact:
    "Contact: Email — udhayaprakashv.24@gmail.com | LinkedIn, GitHub, Twitter, and Instagram available via the social links in the portfolio header.",
  social:
    "Social Links: LinkedIn, GitHub, Twitter (@the_usos_boy), Instagram (@the_usos_boy). All links are accessible from the portfolio header.",
  resume:
    "To download the resume, please contact Udhaya Prakash directly at udhayaprakashv.24@gmail.com or reach out via LinkedIn.",
  goals:
    "Career Goals: Udhaya Prakash aims to work at the intersection of Data Analytics and UI/UX Design — building data-driven, human-centred digital products that are both insightful and beautiful.",
  certifications:
    "Certifications and achievements are updated regularly. For the latest, please reach out via email or LinkedIn.",
};

function getResponse(input: string): string {
  const q = input.toLowerCase();

  if (/(who|about|yourself|introduce|tell me)/i.test(q))
    return PORTFOLIO_KB.about;
  if (/(data analytic|python|sql|power bi|tableau|excel|statistic)/i.test(q))
    return PORTFOLIO_KB.skills_data;
  if (/(ui.?ux|figma|wireframe|prototype|design system|user research)/i.test(q))
    return PORTFOLIO_KB.skills_uiux;
  if (/(skill|tool|technolog|stack)/i.test(q))
    return PORTFOLIO_KB.skills_all;
  if (/(project|build|create|food|bus|autofinder|insurance|responsive)/i.test(q))
    return PORTFOLIO_KB.projects;
  if (/(experience|internship|work|white.*box|make labs|bengaluru)/i.test(q))
    return PORTFOLIO_KB.experience;
  if (/(education|degree|btech|b\.tech|university|college|student)/i.test(q))
    return PORTFOLIO_KB.education;
  if (/(certif|achievement|award)/i.test(q))
    return PORTFOLIO_KB.certifications;
  if (/(contact|email|reach|message)/i.test(q))
    return PORTFOLIO_KB.contact;
  if (/(social|linkedin|github|twitter|instagram)/i.test(q))
    return PORTFOLIO_KB.social;
  if (/(resume|cv|download)/i.test(q))
    return PORTFOLIO_KB.resume;
  if (/(goal|aim|aspir|career|future|plan)/i.test(q))
    return PORTFOLIO_KB.goals;

  return "I can only answer questions related to Udhaya Prakash's portfolio, skills, projects, and experience. Try asking about his projects, skills, internships, or contact info!";
}

const SUGGESTIONS = [
  "Tell me about yourself",
  "Show your projects",
  "What are your Data Analytics skills?",
  "What UI/UX tools do you use?",
  "Show your experience",
  "How can I contact you?",
];

type Message = {
  role: "user" | "assistant";
  text: string;
  time: string;
};

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function parseMarkdown(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I'm Udhaya Prakash's AI Assistant. I can answer questions about his Data Analytics skills, UI/UX Design experience, projects, certifications, education, achievements, resume, and career goals. What would you like to know?",
      time: "",
    },
  ]);

  useEffect(() => {
    setMessages((m) =>
      m.map((msg, i) => (i === 0 && msg.time === "" ? { ...msg, time: now() } : msg))
    );
  }, []);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, typing]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { role: "user", text: trimmed, time: now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = getResponse(trimmed);
      setMessages((m) => [...m, { role: "assistant", text: reply, time: now() }]);
      setTyping(false);
    }, 900);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI Assistant"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{
          background: "rgba(8,12,28,0.92)",
          border: "1.5px solid rgba(56,189,248,0.55)",
          boxShadow: "0 0 24px rgba(56,189,248,0.35), 0 4px 20px rgba(0,0,0,0.6)",
        }}
      >
        {open ? (
          <ChevronDown className="h-6 w-6 text-sky-400" />
        ) : (
          <Bot className="h-6 w-6 text-sky-400" />
        )}
      </button>

      {/* Chat window */}
      <div
        className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right"
        style={{
          width: "min(380px, calc(100vw - 24px))",
          height: open ? "520px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          borderRadius: "20px",
          background: "rgba(8,12,28,0.92)",
          border: "1px solid rgba(56,189,248,0.22)",
          boxShadow: "0 0 50px -10px rgba(56,189,248,0.2), 0 24px 60px rgba(0,0,0,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transform: open ? "scale(1)" : "scale(0.92)",
        }}
      >
        {/* Header */}
        <div
          className="flex shrink-0 items-center gap-3 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(56,189,248,0.15)" }}
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{
              background: "rgba(56,189,248,0.12)",
              border: "1px solid rgba(56,189,248,0.35)",
              boxShadow: "0 0 14px rgba(56,189,248,0.25)",
            }}
          >
            <Bot className="h-5 w-5 text-sky-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">AI Portfolio Assistant</p>
            <p className="text-[11px] text-sky-400/70 truncate">Ask me about Udhaya Prakash</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(56,189,248,0.2) transparent" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed"
                style={
                  msg.role === "user"
                    ? {
                        background: "rgba(56,189,248,0.18)",
                        border: "1px solid rgba(56,189,248,0.3)",
                        color: "#e2e8f0",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#cbd5e1",
                      }
                }
              >
                <span dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }} />
                <p className="mt-1 text-[10px] opacity-40">{msg.time}</p>
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div
                className="flex gap-1 items-center px-3 py-2.5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="shrink-0 flex gap-2 overflow-x-auto px-4 pb-2 no-scrollbar" style={{ scrollbarWidth: "none" }}>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium text-sky-400 transition-colors hover:bg-sky-400/10"
                style={{ border: "1px solid rgba(56,189,248,0.3)" }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          className="shrink-0 flex items-center gap-2 px-3 py-3"
          style={{ borderTop: "1px solid rgba(56,189,248,0.15)" }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Ask me about Udhaya Prakash..."
            className="flex-1 rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(56,189,248,0.2)",
            }}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 disabled:opacity-30 hover:scale-105 active:scale-95"
            style={{
              background: "rgba(56,189,248,0.2)",
              border: "1px solid rgba(56,189,248,0.4)",
            }}
          >
            <Send className="h-4 w-4 text-sky-400" />
          </button>
        </div>
      </div>
    </>
  );
}
