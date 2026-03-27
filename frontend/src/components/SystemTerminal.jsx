import React from 'react';
import './SystemTerminal.css';

const SystemTerminal = () => {
  return (
    <div className="terminal-container scroll-anim-zoom">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="t-btn close-btn"></span>
          <span className="t-btn min-btn"></span>
          <span className="t-btn max-btn"></span>
        </div>
        <div className="terminal-title">zhen@zh3n:~</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="prompt">zhen@zh3n:~$</span> <span className="command">neofetch</span>
        </div>
        <div className="neofetch-output">
          <div className="neofetch-ascii">
{`                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/\n`}
          </div>
          <div className="neofetch-info">
            <span className="info-title">zhen<span className="at">@</span>zh3n</span>
            <span className="info-divider">---------</span>
            <p><span className="info-key">OS:</span> Ubuntu 24.04.4 LTS x86_64</p>
            <p><span className="info-key">Host:</span> 20ALA006JP ThinkPad X240</p>
            <p><span className="info-key">Kernel:</span> 6.8.0-106-generic</p>
            <p><span className="info-key">Uptime:</span> 17 hours, 46 mins</p>
            <p><span className="info-key">Packages:</span> 3886 (dpkg), 21 (snap)</p>
            <p><span className="info-key">Shell:</span> zsh 5.9</p>
            <p><span className="info-key">Resolution:</span> 1920x1080</p>
            <p><span className="info-key">DE:</span> Xfce 4.18</p>
            <p><span className="info-key">WM:</span> Xfwm4</p>
            <p><span className="info-key">WM Theme:</span> materia-cyberpunk-neon</p>
            <p><span className="info-key">Theme:</span> materia-cyberpunk-neon [GTK2], Breeze [GTK3]</p>
            <p><span className="info-key">Icons:</span> Papirus-Dark [GTK2], Slot-Dark-Icons [GTK3]</p>
            <p><span className="info-key">Terminal:</span> tilix</p>
            <p><span className="info-key">CPU:</span> Intel i5-4300U (4) @ 2.900GHz</p>
            <p><span className="info-key">GPU:</span> Intel Haswell-ULT</p>
            <p><span className="info-key">Memory:</span> 4064MiB / 7617MiB</p>
            <div className="color-blocks">
               <span className="cb cb-0"></span><span className="cb cb-1"></span><span className="cb cb-2"></span><span className="cb cb-3"></span>
               <span className="cb cb-4"></span><span className="cb cb-5"></span><span className="cb cb-6"></span><span className="cb cb-7"></span>
            </div>
          </div>
        </div>
        <div className="terminal-line" style={{ marginTop: '1.5rem' }}>
          <span className="prompt">zhen@zh3n:~$</span> <span className="command">cat status.txt</span>
        </div>
        <div className="terminal-line">
          <span className="output">&gt; Status: Active. Monitoring vulnerabilities, bypassing mainframes.</span>
        </div>
        <div className="terminal-line" style={{ marginTop: '1.5rem' }}>
          <span className="prompt">zhen@zh3n:~$</span> <span className="cursor-blink">_</span>
        </div>
      </div>
    </div>
  );
};

export default SystemTerminal;
