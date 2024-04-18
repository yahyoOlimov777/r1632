import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation()
  return (
    <div>
      <header>
        <h1>
       {t("h-t1")}
        </h1>
      </header>
    </div>
  )
}

export default Header
