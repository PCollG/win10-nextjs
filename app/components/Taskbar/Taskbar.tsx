import React from 'react'
import TaskbarButton from '@components/TaskbarButton/TaskbarButton'
import commonStyles from '../common.module.css'
import edgeIcon from '@assets/svg/edge_logo.svg'
import explorerIcon from '@assets/images/explorer.png'
import styles from './taskbar.module.css'
import windowsLogo from '@assets/svg/windows.svg'

interface TaskbarProps {}

export const Taskbar = ({}: TaskbarProps) => {
    return (
        <div className={styles.taskbar}>
            <div className={commonStyles.flex}>
                <TaskbarButton icon={windowsLogo} iconWidth="18px" />
                <div>Search bar</div>
                <div className={styles.iconsContainer}>
                    <TaskbarButton
                        icon={edgeIcon}
                        iconWidth={'25px'}
                        isActive
                    />
                    <TaskbarButton icon={explorerIcon} iconWidth={'24px'} />
                </div>
            </div>
            <div className={commonStyles.flex}>
                <div>Weather</div>
                <div>TrayIcons</div>
                <div>Hour</div>
                <div>Notifications</div>
                <div>DesktopButton</div>
            </div>
        </div>
    )
}