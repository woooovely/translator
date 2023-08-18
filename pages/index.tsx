import Head from "next/head";
import * as S from "../styles/index";
import { useState } from "react";
import axios from "axios";
import { languageMap } from "../constants/conststant";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const TranslatePage = () => {
  const [inputCount, setInputCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [source, setSource] = useState<string>("영어");
  const [target, setTarget] = useState<string>("한국어");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isInput, setIsInput] = useState<boolean>(false);

  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
    setText(e.target.value);
    if (e.target.value !== "") {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };

  const handleTranslation = async () => {
    try {
      setIsLoading(true);
      const sourceCode = languageMap[source];
      const targetCode = languageMap[target];
      const response = await axios.post("/api/translate", {
        text,
        source: sourceCode,
        target: targetCode,
      });
      const translated = response.data.translatedText;
      setTranslatedText(translated || "");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleLanguageChange = () => {
    const temp = source;
    setSource(target);
    setTarget(temp);
    setText(translatedText);
    setTranslatedText(text);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTranslation();
    }
  };

  const handleDeleteText = () => {
    setText("");
    setTranslatedText("");
  };

  return (
    <div>
      <Head>
        <title>Translator</title>
      </Head>
      <S.TextBoxContainer>
        <S.EngTextBox>
          <S.LanguageTitleBox>
            <S.LanguageTitle>{source}</S.LanguageTitle>
            <S.SelectLangauge
              value={source}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setSource(e.target.value);
              }}
            >
              {Object.keys(languageMap).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </S.SelectLangauge>
          </S.LanguageTitleBox>
          <S.InputContainer>
            <S.InputText
              maxLength={2000}
              placeholder="번역할 내용을 입력하세요."
              onChange={onInputHandler}
              value={text}
              onKeyPress={onKeyPress}
            />
            {isInput && (
              <S.DeleteBtn icon={faXmark} onClick={handleDeleteText} />
            )}
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
            <S.LanguageTitle>{target}</S.LanguageTitle>
            <S.SelectLangauge
              value={target}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setTarget(e.target.value);
              }}
            >
              {Object.keys(languageMap).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </S.SelectLangauge>
          </S.LanguageTitleBox>
          <S.InputContainer>
            <S.TranslatedText>
              {isLoading ? "..." : translatedText}
            </S.TranslatedText>
          </S.InputContainer>
          <S.ToolbarBox>
            <S.ChangeBtn onClick={handleLanguageChange}>바꾸기</S.ChangeBtn>
          </S.ToolbarBox>
        </S.KorTranlatedBox>
      </S.TextBoxContainer>
    </div>
  );
};

export default TranslatePage;
