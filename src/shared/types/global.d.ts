export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
  }

  type PostList = Post[];
}