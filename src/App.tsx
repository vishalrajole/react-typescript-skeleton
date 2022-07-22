import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import Dummy from './components/Dummy';

const LOCALE = 'fr';
const DEFAULT_LOCALE = 'en';

export async function getMessages(locale = 'default') {
  try {
    const messages = await import(`./i18n/${locale}.json`);
    return messages.default;
  } catch (error) {
    throw new Error(`Application couldn't find ${locale}.json`);
  }
}

export const App = () => {
  const [messages, setMessages] = useState<any>(); // for now any

  useEffect(() => {
    const getMessages = async (locale = 'default') => {
      try {
        const messages = await import(`./i18n/${locale}.json`);
        setMessages(messages.default);
      } catch (error) {
        throw new Error(`Application couldn't find ${locale}.json`);
      }
    };
    getMessages(LOCALE);
  }, []);

  return (
    <>
      <IntlProvider
        messages={messages}
        locale={LOCALE}
        defaultLocale={DEFAULT_LOCALE}
      >
        <h1>Hello React typescript! </h1>
        <Dummy />
      </IntlProvider>
    </>
  );
};
