import React from 'react';
import Style from './card.module.css';
import '../../../assets/css/color.css';
import cs from 'classnames';
import Trash from '../../../assets/img/icons/trash.svg';
import { Link } from 'react-router-dom';
const Card = ({
  type,
  image,
  imageVal,
  name,
  phone,
  number,
  title,
  content,
  typeTransaction,
  totalTransaction,
  statusTransaction,
  transaction_type,
  amount,
  transactionVal,
  children,
  to,
  textstuff,
  onClick
}) => {
  if (type === 'contact') {
    return (
      <div>
        <div className={Style.receiverCard}>
          <img src={image} alt="contact" className={`${!imageVal ? 'd-none' : `${Style.imgContact}`}`} />
          <div className={Style.contactDesc}>
            <p className="text-18 bold c-grey">{name}</p>
            <p className="text-16 c-dark">{phone}</p>
          </div>
        </div>
      </div>
    );
  } else if (type === 'topUp') {
    return (
      <div>
        <div className={Style.receiverCard}>
          <p className={`text-18 c-dark ${Style.marginZero}`}>
            <span className="c-primary c-mr-4">{number} </span>
            {content}
          </p>
        </div>
      </div>
    );
  } else if (type === 'stuff') {
    return (
      <div>
        <div className={cs(Style.receiverCard, Style.column)}>
          {title === 'Phone Number' ? (
            <div className={Style.phone}>
              <div>
                <p className={`text-16 c-dark ${Style.marginZero}`}>{title}</p>
                <p className={`text-18 bold c-grey ${Style.marginZero}`}>{content}</p>
              </div>
              <Link to={to} className="c-primary text-16">
                {textstuff}
              </Link>
            </div>
          ) : (
            <>
              <p className={`text-16 c-dark ${Style.marginZero}`}>{title}</p>
              <p className={`text-18 bold c-grey ${Style.marginZero}`}>{content}</p>
              {children}
            </>
          )}
        </div>
      </div>
    );
  } else if (type === 'managePhone') {
    return (
      <>
        {content ? (
          <div className={Style.receiverCard}>
            <div className={Style.phone}>
              <div>
                <p className={`text-16 c-dark ${Style.marginZero}`}>{title}</p>
                <p className={`text-18 bold c-grey ${Style.marginZero}`}>{content}</p>
              </div>
                <img src={Trash} alt="trash" onClick={onClick} style={{'cursor': 'pointer'}}/>
            </div>
          </div>
        ) : (
          <div className={Style.receiverCard}>
            <Link to="/add-phone-number" className="text_18 c-blue">
              Add Phone Number
            </Link>
          </div>
        )}
      </>
    );
  } else if (type === 'tfHistory') {
    return (
      <>
        <div className={Style.historyCard}>
          <img src={image} alt="contact" className={Style.avatarUser} />
          <div className={Style.userTransaction}>
            <div className={Style.user__info}>
              <p className={`text-16 my-0 bold c-grey name__user ${Style.shortName}`}>{name}</p>
              <p className="text-14 mt-1 my-0 c-dark">
                {typeTransaction === 'transfer_in'
                  ? 'Transfer In'
                  : typeTransaction === 'transfer'
                  ? 'Transfer Out'
                  : 'Top Up'}
              </p>
            </div>
            <div>
              <p
                className={`${
                  transactionVal
                    ? `text_16 bold ${Style.greenText}`
                    : `${typeTransaction}` === 'transfer_in'
                    ? `text_16 bold ${Style.greenText}`
                    : `text_16 bold ${Style.redText}`
                } ${statusTransaction === 'pending' ? `${Style.yellowText}` : null} ${Style.shortAmount}`}
              >{`${
                transactionVal
                  ? `+${totalTransaction}`
                  : `${typeTransaction}` === 'transfer_in'
                  ? `+${totalTransaction}`
                  : `-${totalTransaction}`
              }`}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else if (type === 'transactionList') {
    return (
      <div>
        <div className={Style.historyCard}>
          <div className={Style.transactionCard}>
            <div className={Style.transactionDesc}>
              <img src={image} alt="contact" className={Style.imgContact} />
              <div className={Style.contactDesc}>
                <p className="text-18 bold c-grey">{name}</p>
                <p className="text-16 c-dark">
                  {transaction_type === 'transfer_in'
                    ? 'Transfer In'
                    : transaction_type === 'transfer'
                    ? 'Transfer Out'
                    : 'Top Up'}
                </p>
              </div>
            </div>
            <p
              className={`${
                transactionVal
                  ? `text_16 bold ${Style.greenText}`
                  : `${transaction_type}` === 'transfer_in'
                  ? `text_16 bold ${Style.greenText}`
                  : `text_16 bold ${Style.redText}`
              } ${
                statusTransaction === 'pending'
                  ? `text_16 bold ${Style.yellowText}`
                  : statusTransaction === 'approve'
                  ? `text_16 bold ${Style.greenText}`
                  : `text_16 bold ${Style.redText}`
              }`}
            >{amount}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
