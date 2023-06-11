import styled from 'styled-components';

export const TextBoxContainer = styled.div`
  height: 343px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 50px;
  display: flex;
`

export const EngTextBox = styled.div`
  height: 343px;
  width: 599px;
  border: 1px solid #CDCDCD;
  border-radius: 10px;
  margin-right: 20px;
`

export const KorTranlatedBox = styled.div`
  width: 599px;
  height: 343px;
  border: 1px solid #CDCDCD;
  border-radius: 10px;
`

export const LanguageTitleBox = styled.div`
  height: 52px;
  border-bottom: 1px solid #E3E3E3;
`

export const LanguageTitle = styled.span`
  font-size: 18px;
  padding: 40px;
  padding: 0;
  display: flex;
  align-items: center;
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
`