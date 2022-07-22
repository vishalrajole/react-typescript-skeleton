import { FormattedMessage, FormattedNumber } from 'react-intl';

const Dummy = () => {
  return (
    <>
      <FormattedMessage
        id='myMessage'
        defaultMessage='Today is {ts, date, ::yyyyMMdd}'
        values={{ ts: Date.now() }}
      />
      <br />
      <FormattedNumber value={19} style='currency' currency='EUR' />
    </>
  );
};

export default Dummy;
