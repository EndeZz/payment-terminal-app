import { FC } from 'react';
import {
  CaptionSuccess,
  SuccessBoxWrapper,
  TitleSuccess,
} from './SuccessBox.styled';

interface SuccessBoxProps {
  propsRef: React.RefObject<HTMLInputElement>;
  isShow: boolean;
  title: string;
  caption?: string;
}

const SuccessBox: FC<SuccessBoxProps> = ({
  propsRef,
  isShow,
  title,
  caption,
}) => (
  <>
    {isShow && (
      <SuccessBoxWrapper ref={propsRef}>
        <TitleSuccess>{title}</TitleSuccess>
        {caption && <CaptionSuccess>{caption}</CaptionSuccess>}
      </SuccessBoxWrapper>
    )}
  </>
);

export default SuccessBox;
