import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const MainContent = ({ children }: Props) => {
    return (
        <div>
            <div className={'content-grid'}>
                <div className={'benefits'}>
                    <p>С CleverFit ты сможешь:</p>
                    <ul className={'benefits-list'}>
                        <li className={'benefits-list-item'}>
                            — планировать свои тренировки на календаре, выбирая тип и уровень
                            нагрузки;
                        </li>
                        <li>
                            — отслеживать свои достижения в разделе статистики, сравнивая свои
                            результаты с нормами и рекордами;
                        </li>
                        <li>
                            — создавать свой профиль, где тыможешь загружать свои фото, видео и
                            отзывы о тренировках;
                        </li>
                        <li>
                            — выполнять расписанные тренировки для разных частей тела, следуя
                            подробным инструкциям и советам профессиональных тренеров.
                        </li>
                    </ul>
                </div>

                <p className={'benefits-text'}>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </p>

                {children}
            </div>
        </div>
    );
};
