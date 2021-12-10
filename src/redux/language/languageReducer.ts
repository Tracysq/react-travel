import {CHANGE_LANGUAGE, changeLanguageAction} from './languageActions'

interface languageState {
  language: 'en' | 'zh'
  languageList: { name: string, code: string }[]
}

const defaultState: languageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

export default (state = defaultState, action: changeLanguageAction) => {
  console.log(state)
  console.log(action)

  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}