"use client";
import CarouselList from "@/components/CarouselList";

import { ClipboardDefault } from "@/components/ClipboardDefault";
import TaskQuests from "@/components/quests/taskQuests";

export default function index() {
  return (
    <div className="py-8">
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="font-semibold text-md md:text-xl lg:text-2xl ">
          {mockDataQuest.title || ""}
        </div>

        <ClipboardDefault />
      </div>
      <div className="flex flex-col pt-6 gap-y-4">
        {mockDataQuest?.tasks?.map((quest) => {
          return <TaskQuests quest={quest} key={quest.id} />;
        })}
      </div>
      <div className="pt-12">
        <div className="text-2xl font-semibold">Description</div>

        <div className="pt-2">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {mockDataQuest.description || ""}
          </p>
        </div>
      </div>
      <div className="pt-4 md:pt-10 ">
        <CarouselList />
      </div>
    </div>
  );
}

const mockDataQuest = {
  avatar:
    "https://s3.ap-northeast-1.amazonaws.com/quest3.xyz/community/894066191681466636.png",
  title: "Blow up with $BUBBLE coin from @ImaginaryOnes!",
  status: "Draft",
  createAt: "4/16/2024 - 12:12",
  description: `Disclaimer : Previously we wanted to provide an explanation of why we use BSC on QuestN, because QuestN is not available for SEI Network, therefore we use BSC on QuestN

Introduction :
     PepeBorn is more than just a NFT and Token project, we offer many benefits and advantages in this project, our NFTs and Tokens are fully functional and have many usecases that we can offer, such as Whitelist, Airdrop, Staking and Earning PBT and SEI Tokens, Voting (DAO), Lottery Draw and etc.

     You can also participate in the Last Mint Contest at the time of minting begins and have the opportunity to get a reward pool that starts with 50 SEI and will continue to increase by 10% (0.3 SEI) from each NFT public minted (890 SEI total, or 0.3 SEI x 2800 NFT (Public Mint) = 840 SEI + 50 SEI From Dev = Total 890 SEI), We also have 1/1 and 1/1+Legendary NFTs with a floor value of 20 SEI (1/1) and 30 SEI (1/1+legendary) that you can get randomly and many more usecases that we will provide to our users.

     With a mint price that is quite cheap at around 1 SEI for WL and 3 SEI for Public Mint, you can already have the PepeBorn NFT Collection, it is worth it with the many usecases we offer, and we guarantee the floor price of our NFT in the market, if anyone sells NFT below the floor price then we will buyback and burn the NFT, so the supply of NFT will decrease, and of course the price will increase. 5% of the 10% (50%) of transaction fees in the market will be used to maintain the price of PepeBorn NFTs (Buyback and Burn), we believe this system in addition to other usecases such as staking, lottery draw, DAO, WL and others will put buying pressure on Pepeborn NFTs. Many projects on other chains use this method to keep the price of their NFTs in check and it works, We had that experience.

Whitelist (WL) :
To get WL, please complete the task on QuesN, and paste your address on our Twitter or on our Discord

GiveAways :
To get giveaways from us, please complete the task on QuestN, and we will draw the winner, don't forget to follow, like, RT and comment HERE and HERE
We will give away 50 free NFTs to 50 random winners. NFTs will be tradeable on the Dagora NFT Marketplace, Pallet.exchange and others.

Airdrop :
We will provide 5% supply (50M PBT) of our tokens to NFT holders, as soon as we launch our tokens on the market. To get our airdrop you need to have an NFT of ours in your wallet, and we will take a snapshot for that, each of your NFTs in the wallet will have a portion, so there is no need to worry if you have more than 1 NFT in your wallet, because we give airdrop tokens for each NFT or per NFT, not per wallet.
Please visit our partner website on Dagora NFT marketplace to get our NFT - LINK HERE`,
  tasks: [
    {
      type: "twitter",
      title: "Follow @_MetaEarth_ on X",
      id: "171327450sd3338",
      targetActionId: "macarondex",
      action: "follow",
      label: "Follow",
    },
    {
      type: "twitter",
      title: "Like a Post by @/_MetaEarth_ on X",
      id: "171274503538",
      targetActionId: "1764599241077346714",
      action: "like",
      label: "Like",
    },
    {
      type: "twitter",
      title: "Post on X and tag 3 friends on X",
      id: "171327450538",
      targetActionId: `https://twitter.com/intent/post?text=https%3A%2F%2Fx.com%2F_MetaEarth_%2Fstatus%2F1764599241077346714%3Fs%3D20%0A%0A%23Modular%20Meta%20Earth%20Network%20with%20native%20%23DID%20is%20coming%2C%20LFG%20%23Coldstart2024%0A%0A%23MetaEarth%20%23Modular%20%23Coldstart2024`,
      action: "post&tag",
      label: "Post & Tag",
    },
    {
      type: "twitter",
      title: "Retweet a post  by @/_MetaEarth_ on X",
      id: "17274503538",
      targetActionId: "1764599241077346714",
      action: "retweet",
      label: "Retweet",
    },
    {
      type: "facebook",
      title: "Like a Post by @/_MetaEarth_ on Facebook",
      id: "1713274503338",
      targetActionId: "",
      action: "like",
      label: "Like",
    },
    {
      type: "telegram",
      title: "Join @Test group  on Telegram",
      id: "1711274503538",
      targetActionId: "https://t.me/+UC3g3IebidY1ZDNl",
      action: "join-group",
      label: "Join Group",
    },
    {
      type: "telegram",
      title: "Join @Tets chanel  on Telegram",
      id: "1711274503538",
      targetActionId: "https://t.me/+UVmkYyP9xuRhMGU1",
      action: "join-chanel",
      label: "Join Chanel",
    },
  ],
};
