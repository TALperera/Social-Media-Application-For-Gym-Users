
import com.paf.gymapp.entity.Post;
import com.paf.gymapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/vi/postContent")

public class PostContentController {
    @Autowired
    private PostService postService;

    // post save -----
    @PostMapping("/save")
    public Post savePost(@RequestBody Post post) {

        return postService.saveOrUpdate(post);
    }

    // view all posts -----
    @GetMapping("/getAll")
    public Iterable<Post> getpost() {
        return postService.getpost();
    }

    // edit post  -----
    @PutMapping(value = "/edit/{id}")
    private Post updatePost(@RequestBody Post post, @PathVariable(name = "id") int id) {

        post.setPostId(id);
        return postService.saveOrUpdate(post);
    }

    // delete post -----
    @DeleteMapping("/delete/{id}")
    private void DeletePost(@PathVariable(name = "id") int id) {

        postService.deletePost(id);
    }

    // delete post by id-----
    @RequestMapping("*/post/{id}")
    private Optional<Post> getPost(@PathVariable(name = "id") int id) {

        return postService.getPostById(id);
    }

}
