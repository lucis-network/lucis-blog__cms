import React from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"
import Header from "./header"
import PostsListByCategory from "./homepage/postsListByCategory"
import Post from "./post"
import Page from "./page"
import Loading from "./common/loading"
import Archive from "./archive"
import NotFound from "./common/notfound"
import GlobalStyles from "../styles/global"
import RecentPosts from "./homepage/recentPosts"
import MediaPosts from "./homepage/mediaPosts"
import { Container, MainBg, Ranking, Main } from "../styles/common"
import Footer from "./footer"
import Image from "@frontity/components/image"
import rankingImg from "../images/ranking.png"
import LucisInsight from "./lucisInsight"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <MainBg when={data.isHome}>
            <Ranking>
              <Container>
                <Image src={rankingImg} />
              </Container>
            </Ranking>
            <PostsListByCategory categorySlug="top-trending" title="TOP TRENDING" />
            <PostsListByCategory categorySlug="hot-search" title="HOT SEARCH" />
            <RecentPosts />
            <MediaPosts />
            <PostsListByCategory categorySlug="lucis-review" title="LUCIS REVIEW" id="lucis-review" />
          </MainBg>
          <Page when={data.isPage} />
          <Archive when={data.isArchive} />
          <Post when={data.isPost} />
          <LucisInsight when={state.router.link === '/lucis-insight/'} />
          <NotFound />
        </Switch>
      </Main>
      <Footer />
    </>
  )
}

export default connect(Root)
