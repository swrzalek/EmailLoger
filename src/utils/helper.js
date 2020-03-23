/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
export const hashEmail = (email) => {
  let hash = 0; let i; let
    chr;
  if (email.length === 0) return hash;
  for (i = 0; i < email.length; i++) {
    chr = email.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return Math.abs(hash).toString();
};

export default { hashEmail };
