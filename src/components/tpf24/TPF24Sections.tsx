'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// 定义一个播客卡片组件
function PodcastCard({
  id,
  number,
  title,
  subtitle,
  description,
  image,
  color,
  delay,
}: {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  image: string
  color: string
  delay: number
}) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  // 根据color参数动态生成背景颜色类
  const getBgColorClass = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 dark:bg-blue-950/30'
      case 'purple':
        return 'bg-purple-50 dark:bg-purple-950/30'
      case 'pink':
        return 'bg-pink-50 dark:bg-pink-950/30'
      case 'green':
        return 'bg-green-50 dark:bg-green-950/30'
      case 'orange':
        return 'bg-orange-50 dark:bg-orange-950/30'
      default:
        return 'bg-slate-50 dark:bg-slate-800/30'
    }
  }

  const getBorderColorClass = () => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 dark:border-blue-900/30'
      case 'purple':
        return 'border-purple-200 dark:border-purple-900/30'
      case 'pink':
        return 'border-pink-200 dark:border-pink-900/30'
      case 'green':
        return 'border-green-200 dark:border-green-900/30'
      case 'orange':
        return 'border-orange-200 dark:border-orange-900/30'
      default:
        return 'border-slate-200 dark:border-slate-700/30'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-2xl border p-6 shadow-sm ${getBgColorClass()} ${getBorderColorClass()}`}
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="text-2xl font-bold text-slate-400 dark:text-slate-500">
          {number}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <h4 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-200">
        {subtitle}
      </h4>

      <div className="prose prose-slate dark:prose-invert prose-sm mb-6 max-w-none">
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>

      {image && (
        <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={image}
              alt={title}
              width={600}
              height={338}
              className="object-cover"
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function TPF24Sections() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              visionOS × Tech PodFest 特别节目
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
              👏 欢迎👂 收听：空间计算的先驱们分享他们的洞见、经验与未来展望
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 节目一：脑放电波 */}
            <PodcastCard
              id="nao-fang-dian-bo"
              number="01"
              title="脑放电波"
              subtitle="对谈 Vision Pro首批开发者：Killer App是生活本身，游戏与社交的下一次革命"
              description={
                '请到了国内非常优秀的Vision Pro开发者（一位创办了腾讯网易同时投资的游戏公司、一位在陌陌科技开发了全新的社交应用），讨论3个问题：1.Vision Pro会不会吃灰：现在都有什么应用？为什么如此昂贵且小众的产品，开发者还愿意为它非理性投入？Apple 用了哪些策略来引导开发者？2.Vision Pro生态预测：是泡沫狂欢还是走向新时代？苹果为什么不做游戏、刻意规避XR偏要讲空间计算？这个生态会如何发展？Killer App 是什么？3.给开发者的建议：空间计算时代和我的业务有关系吗？我需要满足哪些需求？'
              }
              image="/images/tpf24/naofangdianbo.png"
              color="blue"
              delay={0.1}
            />

            {/* 节目二：科技乱炖 */}
            <PodcastCard
              id="ke-ji-luan-dun"
              number="02"
              title="科技乱炖"
              subtitle="现代障眼法有多厉害? 体验完Vision Pro，我们录了这期科幻播客"
              description="黄宁：中国移动互联网的早期创业者，中国第一代 iOS 开发者，专注于 Apple 生态下的 app 增长超过10年。目前担任应用雷达的联合创始人及 CEO ，应用雷达（www.ann9.com）是中国ASO 、Apple Ads 、VisionOS等领域的先行企业。"
              image="/images/tpf24/kejiluandun.png"
              color="purple"
              delay={0.2}
            />

            {/* 节目三：硅谷101 */}
            <PodcastCard
              id="gui-gu-101"
              number="03"
              title="硅谷101"
              subtitle="与徐梧聊聊 Vision Pro:十倍于移动互联网的机会爆发?"
              description={
                '为什么空间计算带来了十倍于移动互联网的机会？今天我们邀请到了XR领域的天使投资人徐梧来讲一讲他的观点，徐梧（XR天使投资人，猫眼电影创始人，真格基金投资合伙人）曾经投资了VR游戏《Contractors》《Battle talent》等。同时，在过去的一个半月的时间里，徐梧每天都会花3-5个小时在VisionPro这款设备上。今天我们会聊一聊他的使用体验与他对XR的深度思考。'
              }
              image="/images/tpf24/guigu101.png"
              color="green"
              delay={0.3}
            />

            {/* 节目四：头号茶水间 */}
            <PodcastCard
              id="tou-hao-cha-shui-jian"
              number="04"
              title="头号茶水间"
              subtitle="对谈杨昊伦：Let's visionOS 大会与 Apple 应用生态开发"
              description={
                "昊伦是交互设计师、独立应用SixD的开发者和设计师，同时也是本次Let's visionOS大会的视频导演。他推荐了以下：- Jony Ive：前苹果首席设计师及副总裁，苹果多款经典产品的设计者。- Phillip Davis：Apple 交互设计师- Jordan Singer：Diagram创始人，Figma AI负责人- Vision Pro应用推荐：SixD、Presona Studio、AirDraw、stockX"
              }
              image="/images/tpf24/touhaochashuijian.png"
              color="pink"
              delay={0.4}
            />

            {/* 节目五：出海去孵化器 */}
            <PodcastCard
              id="chu-hai-qu"
              number="05"
              title="出海去孵化器"
              subtitle="出海去 0x14: 独立创作者在 visionOS 生态中的机会"
              description={
                '嘉宾 梁芊荟：No.7 科技 CEO，MIT CS & 建筑 双硕士，visionOS 首发应用团队出海去孵化器: 我们共同致力于让每一位独立创造者都能发挥自己超级个体的潜力，打造自己的全球化一人公司！'
              }
              image="/images/tpf24/chuhaiqu.png"
              color="orange"
              delay={0.5}
            />

            {/* 收听提示 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6 text-center text-white shadow-lg md:col-span-2"
            >
              <h3 className="mb-3 text-xl font-bold">聆听空间计算的未来</h3>
              <p className="mb-6">
                关注 Tech PodFest 官方渠道，第一时间获取 visionOS
                创作者大会精彩内容，探索空间计算带来的无限可能！
              </p>
              <Link
                href="#subscribe"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
              >
                <span>订阅频道</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 transition group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
