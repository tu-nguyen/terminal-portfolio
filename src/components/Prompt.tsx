// username, hostname, path, symbol
const Prompt = ({ out, theme }: { out: {username: string, hostname: string, path: string, symbol: string}, theme: string}) => {
  return (
    <>
    <span className={theme}>
        {out.username}@{out.hostname}
    </span>
    <span>
      {out.path}{out.symbol}
    </span></>
  );
};

export default Prompt;