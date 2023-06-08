import Head from 'next/head'
import Image from 'next/image'
import * as S from '../styles/index';

const TranslatePage = () => {
  
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
            <S.InputText placeholder="번역할 내용을 입력하세요." />
          </S.InputContainer>
        </S.EngTextBox>
        <S.KorTranlatedBox>

        </S.KorTranlatedBox>
      </S.TextBoxContainer>
    </div>
  )
}

export default TranslatePage;