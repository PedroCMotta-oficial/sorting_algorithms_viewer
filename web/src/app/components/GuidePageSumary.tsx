"use client";

import { Link as ScrollLink } from "react-scroll";

export default function Sumary() {
  return (
    <div className="mt-[50px]">

      <nav className="bg-background text-textSecundary font-semibold fixed">
        <ul>
          <div className="mt-1">
            <li><ScrollLink to="como-usar" smooth={true} duration={500} spy={true} hashSpy={true} offset={-300} activeClass="text-white" className="cursor-pointer">
              Como Usar
            </ScrollLink></li>
          </div>

          <div className="mt-1">
            <li><ScrollLink to="significado-cores" smooth={true} duration={500} spy={true} hashSpy={true} offset={-300} activeClass="text-textPrimary" className="cursor-pointer">
              Significado das Cores
            </ScrollLink></li>  
          </div>

          <div className="mt-1">
            <li><ScrollLink to="configuracoes" smooth={true} duration={500} spy={true} offset={-300} activeClass="text-textPrimary" className="cursor-pointer">
              Configurações
            </ScrollLink></li>
          </div>

          <div className="mt-1">
            <li><ScrollLink to="faq" smooth={true} duration={500} spy={true} offset={-300} activeClass="text-textPrimary" className="cursor-pointer">
              Dúvidas Comuns
            </ScrollLink></li>  
          </div>   
        </ul>
      </nav>

    </div>
  );
}