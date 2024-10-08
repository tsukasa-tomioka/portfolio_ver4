import Arrow from "@/components/atoms/Arrow/";
import styles from "./_index.module.scss";
import { zenKakuGothicNew_w700 } from "@/lib/fonts";
import Categorys from "@/components/molecules/Categorys/";
import UpdateDate from "@/components/molecules/UpdateDate";
import EmojiIcon from "@/components/atoms/EmojiIcon";
import Navigation from "@/modules/Navigation";

export default function ArticleItem({
  article,
  rootPath = '/blog/'
}: {
  article: Newt.Article,
  rootPath?: string
}) {
  return <>
    <li key={article.slug} className={styles.root}>
      <Navigation typing={false} href={`${rootPath}${article.slug}`} className={styles.inner}>
        <div className={styles.thumbnail}>
          <EmojiIcon emoji={article.thumbnail} />
        </div>
        <p className={`${styles.title} ${zenKakuGothicNew_w700.className}`}>
          {article.title.substring(0, 60)}
          {article.title.length <= 60 ? '' : '...'}
        </p>
        <div className={styles.info}>
          <div className={styles.date}>
            <UpdateDate updateTime={article._sys.raw.updatedAt} />
          </div>
          <div className={styles.categorys}>
            <Categorys categorys={article.categorys} />
          </div>
        </div>
        <div className={styles.arrow}>
          <Arrow fill={'white'} />
        </div>
      </Navigation>
    </li>
  </>
}
