import '../styles/BackgroundWrapper.scss';


type Props = {
  children: React.ReactNode;
};

const BackgroundWrapper = ({ children }: Props) => {
  return <div className="background-wrapper">{children}</div>;
};

export default BackgroundWrapper;
