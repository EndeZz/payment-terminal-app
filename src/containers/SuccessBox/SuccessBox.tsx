import { FC } from 'react';
import {
  CaptionSuccess,
  SuccessBoxWrapper,
  TitleSuccess,
} from './SuccessBox.styled';

interface SuccessBoxProps {
  propsRef: React.RefObject<HTMLInputElement>;
  title: string;
  caption?: string;
}

export const SuccessBox: FC<SuccessBoxProps> = ({
  propsRef,
  title,
  caption,
}) => (
  <>
    <SuccessBoxWrapper ref={propsRef}>
      <TitleSuccess>{title}</TitleSuccess>
      {caption && <CaptionSuccess>{caption}</CaptionSuccess>}
    </SuccessBoxWrapper>
  </>
);
