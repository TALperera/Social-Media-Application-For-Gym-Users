


import com.paf.gymapp.entity.Post;
import com.paf.gymapp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class Post {


    @Autowired
    private static PostRepository postRepository;

    public Post saveOrUpdate(Post post) {
        return postRepository.save(post);
    }


    public void DeletePost(int id) {
        postRepository.deleteById(id);
    }

    public Optional<Post> getPostById(int id) {
        return postRepository.findById(id);
    }

    public void deletePost(int id) {
        postRepository.deleteById(id);
    }

    public Iterable<Post> getpost() {
        return postRepository.findAll();
    }




}
