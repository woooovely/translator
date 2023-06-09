import Head from "next/head";
import Image from "next/image";
import * as S from "../styles/index";
import { useState } from "react";

const TranslatePage = () => {
  const [inputCount, setInputCount] = useState<number>(0);

  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
  };

  return (
    <div>
      <Head>
        <title>한국어 - 영어 번역기</title>
      </Head>
      <S.TextBoxContainer>
        <S.EngTextBox>
          <S.LanguageTitleBox>
            <S.LanguageTitle>한국어</S.LanguageTitle>
          </S.LanguageTitleBox>
          <S.InputContainer>
            <S.InputText
              maxLength={2000}
              placeholder="번역할 내용을 입력하세요."
              onChange={onInputHandler}
            />
          </S.InputContainer>
          <S.ToolbarBox>
            <S.TextLength>
              <span>{inputCount}</span>
              <span> / 2000</span>
            </S.TextLength>
          </S.ToolbarBox>
        </S.EngTextBox>
        <S.KorTranlatedBox></S.KorTranlatedBox>
      </S.TextBoxContainer>
    </div>
  );
};

export default TranslatePage;
