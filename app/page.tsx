import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { BoostyIcon, DonatePayIcon, DonationAlertIcon, GithubIcon, GoogleDriveIcon, KickIcon, MemAlertIcon, RutubeIcon, TelegramIcon, TwitchIcon, VKIcon, VKPlayIcon, WebArchiveIcon, YouTubeIcon } from "@/components/icons";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
``
export default function Home() {
const iconSizeList = 52

return (
  <section className="flex flex-col items-center justify-center gap-4 pb-32">
    <div className="inline-block max-w-xl text-center justify-center">
      <img className="main-gif" src={'https://media1.tenor.com/m/Xrv9hFNP6G8AAAAd/%D0%BE-%D0%BA%D0%B0%D0%BA-%D0%B6%D0%B5-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE-%D0%B6%D0%BC%D0%B8%D0%BB%D1%8C.gif'} alt="gif"/>
      <span className={title({ class: "zfont lg:text-6xl" })}>Шмилевский.РФ</span>
      <div className={subtitle({ class: "mt-1 zbody" })}>
        <strong>Владислав Шмилевский</strong> — российский
        политический блогер, в прошлом работал преподавателем
        политологии в университете. Регулярно проводит стримы,
        на которых разбирает новости политики и общества, а
        также отвечает на вопросы зрителей.
      </div>
    </div>

    <div className="flex gap-3 flex-wrap">
      <Link
        isExternal
        className={buttonStyles({ variant: "bordered", radius: "full" })}
        href={siteConfig.links.donate.da}
      >
        <DonationAlertIcon size={24} />
        DonationAlert
      </Link>
      <Link
        isExternal
        className={buttonStyles({ variant: "bordered", radius: 'full' })}
        href={siteConfig.links.donate.dpay}
      >
        <DonatePayIcon size={24} />
        DonatePay
      </Link>
      <Link
        isExternal
        className={buttonStyles({ variant: "bordered", radius: "full" })}
        href={siteConfig.links.donate.mema}
      >
        <MemAlertIcon size={24} />
        MemAlert
      </Link>
    </div>

    <div className="w-3/5	 mt-20 flex flex-col gap-3 align-start justify-between ">
      <Card>
        <CardBody className="px-0 pb-0">
          <h2 className="text-center font-medium uppercase">Стрим</h2>
          <Divider className="mt-3"/>
          {/* <p>Make beautiful websites regardless of your design experience.</p> */}
          <div className="list-links w-full flex gap-2">
            <Link
            isExternal
            href={siteConfig.links.stream.youtube}
            >
              <YouTubeIcon size={iconSizeList} />
              YouTube
            </Link>
            <Link
              isExternal
              href={siteConfig.links.stream.vkplay}
            >
              <VKPlayIcon size={iconSizeList} />
              VK Play
            </Link>
            <Link
        isExternal
        href={siteConfig.links.communities.telegram}
      >
        <KickIcon size={iconSizeList} />
        Kick
      </Link>
      
            
            <Link
              isExternal
              href={siteConfig.links.stream.vk}
            >
              <VKIcon size={iconSizeList} />
              Карельский Бальзам
            </Link>
            <Link
              isExternal
              href={siteConfig.links.communities.telegram}
            >
              <TelegramIcon size={iconSizeList} />
              Карельский Бальзам
            </Link>
            <Link
              isExternal
              className="opacity-40"
              href={siteConfig.links.stream.twitch}
            >
              <TwitchIcon size={iconSizeList} />
              Twitch
            </Link>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="px-0 pb-0">
          <h2 className="text-center font-medium uppercase">Хайлайты</h2>
          <Divider className="mt-3"/>
          {/* <p>Make beautiful websites regardless of your design experience.</p> */}
          <div className="list-links w-full flex gap-2">
            <Link
            isExternal
            href={siteConfig.links.stream.youtube}
            >
              <YouTubeIcon size={iconSizeList} />
              YouTube
            </Link>
            <Link
              isExternal
              href={siteConfig.links.stream.vkplay}
            >
              <VKPlayIcon size={iconSizeList} />
              VK Play
            </Link>
            <Link
              isExternal
              href={siteConfig.links.communities.telegram}
            >
              <KickIcon size={iconSizeList} />
              Kick
            </Link>   
            <Link
              isExternal
              href={siteConfig.links.stream.vk}
            >
              <VKIcon size={iconSizeList} />
              Карельский Бальзам
            </Link>
            <Link
              isExternal
              href={siteConfig.links.communities.telegram}
            >
              <TelegramIcon size={iconSizeList} />
              Карельский Бальзам
            </Link>
            <Link
              isExternal
              className="opacity-40"
              href={siteConfig.links.stream.twitch}
            >
              <TwitchIcon size={iconSizeList} />
              Twitch
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>

    <div className="flex gap-3 flex-wrap justify-center">
      <Link
        isExternal
        href={siteConfig.links.stream.youtube}
      >
        <YouTubeIcon size={iconSizeList} />
        YouTube
      </Link>
      <Link
        isExternal
        href={siteConfig.links.highlights.rutube}
      >
        <RutubeIcon size={iconSizeList} />
        Rutube
      </Link>
      <Link
        isExternal
        href={siteConfig.links.stream.vkplay}
      >
        <VKPlayIcon size={iconSizeList} />
        VK Play
      </Link>
      <Link
        isExternal
        href={siteConfig.links.stream.vk}
      >
        <VKIcon size={iconSizeList} />
        VK
      </Link>
      <Link
        isExternal
        href={siteConfig.links.communities.telegram}
      >
        <TelegramIcon size={iconSizeList} />
        Telegram
      </Link>
      <Link
        isExternal
        href={siteConfig.links.communities.telegram}
      >
        <BoostyIcon size={iconSizeList} />
        Boosty
      </Link>
      
      <Link
              isExternal
              href={siteConfig.links.highlights.rutube}
            >
              <RutubeIcon size={iconSizeList} />
              Rutube
            </Link>
      <Link
        isExternal
        href={siteConfig.links.communities.telegram}
      >
        <DonatePayIcon size={iconSizeList} />
        DonatePay
      </Link>
      <Link
        isExternal
        href={siteConfig.links.communities.telegram}
      >
        <DonationAlertIcon size={iconSizeList} />
        DonationAlert
      </Link>
      <Link
        isExternal
        href={siteConfig.links.communities.telegram}
      >
        <MemAlertIcon size={iconSizeList} />
        MemAlert
      </Link>
      <Link
        isExternal
        href={siteConfig.links.communities.telegram}
      >
        <GoogleDriveIcon size={iconSizeList} />
        Google Drive
      </Link>
      <Link
        isExternal
        href={siteConfig.links.communities.telegram}
      >
        <WebArchiveIcon size={iconSizeList} />
        WebArchive
      </Link>
    </div>

    <div className="mt-8">
      <Snippet hideCopyButton hideSymbol variant="bordered">
        <span>
          Get started by editing <Code color="primary">app/page.tsx</Code>
        </span>
      </Snippet>
    </div>
  </section>
);
}
