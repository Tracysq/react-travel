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

interface ActionType {
  type: string,
  payload: any
}

export default (state = defaultState, action: any) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'change_language':
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}