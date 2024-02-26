import styled from 'styled-components/native'

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostData = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: imageUrl || 'https://static.wikia.nocookie.net/paranormal-strange/images/7/75/No_image_available.png/revision/latest?cb=20230116043709' }} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostData>{createdAt}</PostData>
      </PostDetails>
    </PostView>
  );
}

export default Post;
