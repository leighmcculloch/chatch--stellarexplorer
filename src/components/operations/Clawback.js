import React from 'react'
import {FormattedMessage} from 'react-intl'
import Asset from '../shared/Asset'
import AccountLink from '../shared/AccountLink'
import FormattedAmount from '../shared/FormattedAmount'

const Clawback = ({assetCode, assetIssuer, assetType, from, amount}) => <FormattedMessage
  id="operation.clawback"
  values={{
    asset: <Asset code={assetCode} issuer={assetIssuer} type={assetType} />,
    from: <AccountLink account={from} />,
    amount: <FormattedAmount amount={amount} />,
  }}
/>

export default Clawback
