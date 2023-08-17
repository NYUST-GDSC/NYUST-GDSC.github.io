import { createI18n } from 'vue-i18n'
import messages from '../locales/index'

const i18n = createI18n({
    // fallbackLocale: 'zh',
    globalInjection: true,
    // legacy: true,
    locale: 'zh',
    messages,
})

export default i18n