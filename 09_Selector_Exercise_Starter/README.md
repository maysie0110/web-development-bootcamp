## Basic CSS Styling

-[x] Changing background color
-[x] Chaning elements color
-[x] Using class and id to style elements
-[x] Changing styling of a specific input

```
/*Make only inputs with type 'text' have a gray background*/
input[type="text"]{
	background: gray;
}

/* Give both <p>'s inside the 3rd <div> a pink background*/
div:nth-of-type(3) p {
	background: pink;
}

/* Give the 2nd <p> inside the 3rd <div> a 5px white border*/
div:nth-of-type(3) p:nth-of-type(2){
	border: 5px solid white;
}
```

-[x] Changing styling when the element's state is changing (when it's hovered or visited)

