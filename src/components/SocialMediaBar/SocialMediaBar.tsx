import { FC, memo, ReactNode } from 'react';
import Facebook from '@/shared/assets/Facebook.tsx';
import { Button } from '@/shared/ui-kit/button/Button.tsx';
import LinkedIn from '@/shared/assets/LinkedIn.tsx';
import Dribble from '@/shared/assets/Dribble.tsx';
import Instagram from '@/shared/assets/Instagram.tsx';
import { SocialMedias } from '@/shared/constants/socialMedias.ts';
import { getDribblePath, getFacebookPath, getInstagramPath, getLinkedInPath } from '@/shared/constants/getRoutes.ts';
import { Link } from 'react-router-dom';

interface ISocialMedia {
  title: SocialMedias,
  link: string,
  element: ReactNode
}

const socialMedias: ISocialMedia[] = [
  {
    title: SocialMedias.Facebook,
    link: getFacebookPath(),
    element: <Facebook />
  },
  {
    title: SocialMedias.LinkedIn,
    link: getLinkedInPath(),
    element: <LinkedIn />
  },
  {
    title: SocialMedias.Dribble,
    link: getDribblePath(),
    element: <Dribble />
  },
  {
    title: SocialMedias.Instagram,
    link: getInstagramPath(),
    element: <Instagram />
  }
]

const SocialMediaBar: FC = memo(() => {
  return (
    <div className="flex lg:ml-auto gap-4">
      {
        socialMedias.map(media => (
          <Link
            to={media.link}
            key={media.title}
          >
            <Button
              round
              square
              size="sm"
            >
              {media.element}
            </Button>
          </Link>
        ))
      }
    </div>
  );
});

export default SocialMediaBar;