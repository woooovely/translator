import Head from "next/head";
import Image from "next/image";
import * as S from "../styles/index";
import { useState } from "react";
import axios from "axios";

const TranslatePage = () => {
  const [inputCount, setInputCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");

  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
    setText(e.target.value);
  };

  const handleTranslation = async () => {
    try {
      const response = await axios.post("/api/translate", { text });
      const translated = response.data.translatedText;
      setTranslatedText(translated || "");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>한국어 - 영어 번역기</title>
      </Head>
      <S.TextBoxContainer>
        <S.EngTextBox>
          <S.LanguageTitleBox>
            <S.LanguageTitle>영어</S.LanguageTitle>
          </S.LanguageTitleBox>
          <S.InputContainer>
            <S.InputText
              maxLength={2000}
              placeholder="번역할 내용을 입력하세요."
              onChange={onInputHandler}
              value={text}
            />
          </S.InputContainer>
          <S.ToolbarBox>
            <S.TextLength>
              <span>{inputCount}</span>
              <span> / 2000</span>
            </S.TextLength>
            <S.TranslateBtn onClick={handleTranslation}>
              번역하기
            </S.TranslateBtn>
          </S.ToolbarBox>
        </S.EngTextBox>
        <S.KorTranlatedBox>
          <S.LanguageTitleBox>
            <S.LanguageTitle>한국어</S.LanguageTitle>
          </S.LanguageTitleBox>
          <S.InputContainer>
            <S.TranslatedText>{translatedText}</S.TranslatedText>
          </S.InputContainer>
        </S.KorTranlatedBox>
      </S.TextBoxContainer>
    </div>
  );
};

export default TranslatePage;
