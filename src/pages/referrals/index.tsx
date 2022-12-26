/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import toast from 'react-hot-toast';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { trpc } from '../../utils/trpc';

const tiers = [
  {
    id: '1',
    text: '5% discount for traders',
    text2: '5% rebates to referrer',
  },
  {
    id: '2',
    text: '10% discount for traders',
    text2: '10% rebates to referrer',
  },
  {
    id: '3',
    text: (
      <>
        10% discount for traders <br /> 5% rebates to referrer paid in esMPX
      </>
    ),
    text2: '15% rebates to referrer paid in FTM',
  },
];

export default function Referrals() {
  const [isChecked, setIsChecked] = useState<string>('Referral');
  const [referralCode, setReferralCode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isValidationSuccess, setIsValidationSuccess] =
    useState<boolean>(false);

  const handleReferralCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  const clearMessages = () => {
    setError('');
    setMessage('');
  };

  const { mutate: validateCode, isLoading } =
    trpc.referrals.validateCode.useMutation({
      onError: (e) => {
        setError(e.message);
      },
      onSuccess: (data) => {
        toast.success(data.message);
        setIsValidationSuccess(true);
      },
    });

  const { mutate: sendCode } = trpc.referrals.sendCode.useMutation({
    onError: (e) => {
      setError(e.message);
    },
    onSuccess: (data) => {
      toast.success('Successfully sent code!');
      // setIsValidationSuccess(true);
      setIsValidationSuccess(false);
    },
  });

  useEffect(() => {
    clearMessages();
    setReferralCode('');
  }, [isChecked]);

  useEffect(() => {
    if (isValidationSuccess) {
      clearMessages();
      sendCode({ code: referralCode });
    }
  }, [isValidationSuccess]);

  const validateReferralCode = async () => {
    await new Promise((resolve) => {
      if (referralCode) {
        setTimeout(() => {
          clearMessages();
          validateCode({ code: referralCode });
        }, 200);
      }
      resolve('');
    });
  };

  return (
    <div className="referrals">
      <div className="auto__container">
        <div className="referrals__inner">
          <div className="tier">
            <button type="button" className="button primary sm">
              Tiers Explained
            </button>
            <div className="tier__items">
              {tiers.map((item, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 * index }}
                    exit={{ opacity: 0, y: 20 }}
                    className="tierItem"
                    key={item.id}
                  >
                    <div className="tierItem__col">
                      <h6 className="xsm">Tier {item.id}</h6>
                    </div>
                    <div className="tierItem__col">
                      <p className="xsm">Tier {item.text}</p>
                    </div>
                    <div className="tierItem__col">
                      <p className="xsm">Tier {item.text2}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="referralsTab">
            <div className="referralsTab__header">
              <div className="referralsTab__btns">
                <button
                  type="button"
                  onClick={() => setIsChecked('Referral')}
                  className={`button sm ${
                    isChecked === 'Referral' && 'active'
                  }`}
                >
                  Refferal
                </button>
                <button
                  type="button"
                  onClick={() => setIsChecked('Affiliates')}
                  className={`button sm ${
                    isChecked === 'Affiliates' && 'active'
                  }`}
                >
                  Affiliates
                </button>
              </div>
              <p className="xsm">
                Get fee discounts and earn rebates through the GMX referral
                program.
              </p>
            </div>
            <div className="referralsTab__body">
              {isChecked === 'Affiliates' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="referralsTab__body-inner"
                >
                  <h6 className="xsm">Generate Referral Code</h6>
                  <p className="xsm">
                    Looks like you don&apos;t have a referral code to share.
                    Create one now and start earning rebates!
                  </p>
                  <div className="inputS">
                    <input
                      type="text"
                      placeholder="Enter a code"
                      value={referralCode}
                      onChange={(e) => handleReferralCodeInput(e)}
                    />
                  </div>
                  {error && <p className="codeError">{error}</p>}
                  {message && <p className="codeSuccess">{message}</p>}
                  <button
                    type="button"
                    className="button sm primary"
                    onClick={validateReferralCode}
                  >
                    Enter a code
                  </button>
                </motion.div>
              )}
              {isChecked === 'Referral' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="referralsTab__body-inner"
                >
                  <h6 className="xsm">Generate Referral Code</h6>
                  <p className="xsm">
                    Please input a referral code to benefit from fee discounts
                  </p>
                  <div className="inputS">
                    <input
                      type="text"
                      placeholder="Enter a code"
                      value={referralCode}
                      onChange={(e) => handleReferralCodeInput(e)}
                    />
                  </div>
                  {error && <p className="codeError">{error}</p>}
                  {message && <p className="codeSuccess">{message}</p>}
                  <div className="referralsTab__body-footer">
                    <button
                      type="button"
                      className="button sm primary"
                      disabled={isLoading}
                      onClick={validateReferralCode}
                    >
                      Enter Referral Code
                    </button>
                    <button type="button" className="button sm secondary">
                      More info
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
