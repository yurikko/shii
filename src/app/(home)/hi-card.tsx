import { useCenterStore } from '@/hooks/use-center'
import Card from '@/components/card'
import { useConfigStore } from './stores/config-store'
import { HomeDraggableLayer } from './home-draggable-layer'

function getGreeting() {
	const hour = new Date().getHours()

	if (hour >= 6 && hour < 12) {
		return '早上好！☀️'
	} else if (hour >= 12 && hour < 18) {
		return '懒懒的下午〜🎐'
	} else if (hour >= 18 && hour < 22) {
		return '晚上好！🕶️'
	} else {
		return '夜已经深啦🌙'
	}
}

export default function HiCard() {
	const center = useCenterStore()
	const { cardStyles, siteContent } = useConfigStore()
	const greeting = getGreeting()
	const styles = cardStyles.hiCard
	const username = siteContent.meta.username || 'Suni'

	const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x - styles.width / 2
	const y = styles.offsetY !== null ? center.y + styles.offsetY : center.y - styles.height / 2

	return (
		<HomeDraggableLayer cardKey='hiCard' x={x} y={y} width={styles.width} height={styles.height}>
			<Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='text-center max-sm:static max-sm:translate-0'>
				<img src='/images/avatar.png' className='mx-auto rounded-full' style={{ width: 120, height: 120, boxShadow: ' 0 16px 32px -5px #E2D9CE' }} />
				<h1 className='font-averia mt-3 text-2xl'>
					{greeting} <br /> <span className='text-linear text-[32px]'>{username}</span>今天也在努力地 <br /> 活着喵
				</h1>
			</Card>
		</HomeDraggableLayer>
	)
}
