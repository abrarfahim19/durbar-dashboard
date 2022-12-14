import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Layout from "./Layout";
import messages from "./messages";
import "./App.scss";

const SideBar = () => {
  const [locale, setLocale] = useState("en");
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
};

export default SideBar;
