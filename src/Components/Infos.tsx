import React from 'react'

export default function Infos() {
  return (
    <div className="self-stretch flex flex-col items-center justify-center gap-[16px] max-w-full text-left text-sm text-text-text-muted-foreground font-inter">
      <input
        className="w-full [border:none] [outline:none] bg-background-bg-background self-stretch h-10 rounded-radius-rounded-md overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-3 box-border font-inter text-sm text-text-text-muted-foreground min-w-[250px]"
        placeholder="Nome"
        type="text"
      /><input
      className="w-full [border:none] [outline:none] bg-background-bg-background self-stretch h-10 rounded-radius-rounded-md overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-3 box-border font-inter text-sm text-text-text-muted-foreground min-w-[250px]"
      placeholder="Sobrenome"
      type="text"
    />
      <input
        className="w-full [border:none] [outline:none] bg-background-bg-background self-stretch h-10 rounded-radius-rounded-md overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-3 box-border font-inter text-sm text-text-text-muted-foreground min-w-[250px]"
        placeholder="E-mail"
        type="text"
      />
      <input
        className="w-full [border:none] [outline:none] bg-background-bg-background self-stretch h-10 rounded-radius-rounded-md overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-3 box-border font-inter text-sm text-text-text-muted-foreground min-w-[250px]"
        placeholder="Senha"
        type="text"
      />
      <input
        className="w-full [border:none] [outline:none] bg-background-bg-background self-stretch h-10 rounded-radius-rounded-md overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-3 box-border font-inter text-sm text-text-text-muted-foreground min-w-[250px]"
        placeholder="Confirme a senha"
        type="text"
      />
      <div className="self-stretch flex flex-row items-end justify-start py-0 px-[5px] box-border max-w-full text-lightslategray">
        <div className="flex-1 relative inline-block max-w-full">
          <span>{`Ao criar uma conta, você concorda com nossa `}</span>
          <b>Política de Privacidade</b>
          <span>{` e `}</span>
          <b>Política de Comunicação Eletrônica</b>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-2.5 px-5 bg-orange-600 self-stretch rounded-radius-rounded-md flex flex-row items-center justify-center gap-[8px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/badgecheck.svg"
        />
        <b className="relative text-sm leading-[20px] inline-block font-inter text-text-text-primary-foreground text-left min-w-[89px]">
          CADASTRAR
        </b>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/badgecheck.svg"
        />
      </button>
    </div>
  )
}
