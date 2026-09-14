"use client";
import { useEffect, useState } from "react";
export function ThemeToggle(){
 const [theme,setTheme]=useState("system");
 useEffect(()=>{ const saved=localStorage.getItem("theme")||"system"; setTheme(saved); apply(saved); },[]);
 function apply(next:string){ document.documentElement.dataset.theme=next; localStorage.setItem("theme",next); }
 function cycle(){ const next=theme==="system"?"light":theme==="light"?"dark":"system"; setTheme(next); apply(next); }
 return <button className="theme-toggle" onClick={cycle} aria-label={`Color theme: ${theme}. Change theme`}>Theme · {theme}</button>;
}
