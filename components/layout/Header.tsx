import DesktopNav from './DesktopNav';

type Props = {
  isDarkBackground?: boolean;
};

export default function Header({ isDarkBackground = false }: Props) {
  return (
    <header>
      <DesktopNav isDarkBackground={isDarkBackground} />
    </header>
  );
}
