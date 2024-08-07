import '@renderer/styles/globals.scss'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import './i18n/config'
export default function App() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <Button type="primary" onClick={() => i18n.changeLanguage('zh-CN')}>
        {t('hello')}
      </Button>
    </div>
  )
}
