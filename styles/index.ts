import styled from 'styled-components';

export const TextBoxContainer = styled.div`
  height: 343px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 50px;
  display: flex;
  @media screen and (max-width: 368px) {
    flex-direction: column;
    align-items: center;
  }
`

export const EngTextBox = styled.div`
  height: 343px;
  width: 599px;
  border: 1px solid #CDCDCD;
  border-radius: 10px;
  margin-right: 20px;
  @media screen and (max-width: 368px) {
    width: 360px;
    margin: 0 auto;
  }
`

export const KorTranlatedBox = styled.div`
  width: 599px;
  height: 343px;
  border: 1px solid #CDCDCD;
  border-radius: 10px;
  @media screen and (max-width: 368px) {
    width: 360px;
    margin: 0 auto;
  }
`

export const LanguageTitleBox = styled.div`
  height: 52px;
  border-bottom: 1px solid #E3E3E3;
  display: flex;
  justify-content: space-between;
`

export const LanguageTitle = styled.span`
  font-size: 18px;
  padding: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const InputContainer = styled.div`
  height: 226px;
  padding: 20px;
`

export const InputText = styled.textarea`
  font-size: 30px;
  border: none;
  outline: none;
  resize: none;
  font-family: 'Pretendard';
  @media screen and (max-width: 368px) {
    font-size: 20px;
  }
  overflow: hidden;
`

export const ToolbarBox = styled.div`
  height: 62px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #E1E1E1;
`

export const TextLength = styled.p`
  font-size: 20px;
  color: #BBBBBB;
  margin-left: 20px;
`

export const TranslateBtn = styled.button`
  height: 62px;
  width: 120px;
  border: none;
  font-size: 20px;
  background-color: #55B5F3;
  cursor: pointer;
  color: white;
  font-weight: 550;
  border-bottom-right-radius: 9px;
  outline: none;
`

export const TranslatedText = styled.p`
  font-size: 30px;
  margin: 0;
  @media screen and (max-width: 368px) {
    font-size: 20px;
  }
`

export const ChangeBtn = styled.button`
  height: 62px;
  width: 120px;
  border: none;
  font-size: 20px;
  background-color: #21dc6d;
  color: white;
  font-weight: 550;
  cursor: pointer;
  border-bottom-left-radius: 9px;
`

export const SelectLangauge = styled.select`
  border: none;
  border-top-right-radius: 10px;
  outline: none;
`