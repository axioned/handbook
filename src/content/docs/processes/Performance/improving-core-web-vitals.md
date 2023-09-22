---
position: 2
title: Improving Core Web Vitals
---

Some tips and suggestions on how to improve your Core Vital scores

### Adding height and width

To improve the CLS score we need to add `height` and `width` attributes to media elements like images, videos, etc.

```html
<img width="700" height="425" src="img-url.jpg" alt="image" />
```

### Dynamic height and width in WordPress

If you want to dynamically add height and width attributes we can use the inbuilt WP method `wp_get_attachment_image()`

```php
<?php
 $image = get_field('image');
 $size = 'full'; // (thumbnail, medium, large, full or custom size)
 if( $image ) {
 echo wp_get_attachment_image( $image, $size );
 }
?>
```

Reference: https://developer.wordpress.org/reference/functions/wp_get_attachment_image/

## Element render blocking and Remove unused javascript

- If we are using a specific js and CSS file/library which is only needed for specific pages. Load that file on those specific pages only. Eg: if we are using the slick slider, we can load that particular file only for that specific page.
- Add defer to your custom js file and other js files and check if everything is working as expected
- If defer is breaking something then try adding async
