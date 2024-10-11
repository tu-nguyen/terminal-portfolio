// username, hostname, path, symbol
const Prompt = ({ out, theme }: { out: { username: string, hostname: string, path: string, symbol: string }, theme: string }) => {
  return (
    <>
      <span className={`${theme} prompt`}>
        {out.username}@{out.hostname}
      </span>
      <span>
        <p className="path">{out.path}</p>{out.symbol}
      </span></>
  );
};

export default Prompt;