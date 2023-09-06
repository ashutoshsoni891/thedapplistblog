import "../public/css/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import "../components/Layout.scss";
import "../components/Profile/Profile.scss";
import "../components/UserDashboard/UserDashboard.scss";

import "../components/crud/UpdateBlog/UpdateBlog.scss";
import "../components/crud/Categories/Categories.scss";
import "../components/crud/CategoriesAndTags/CategoriesAndTags.scss";
import "../components/crud/CreateBlog/CreateBlog.scss";
import "../components/crud/ReadBlogCard/ReadBlogCard.scss";
import "../components/crud/ReadBlogs/ReadBlogs.scss";
import "../components/crud/Tags/Tags.scss";

import "../components/disqus/Disqus.scss";
import "../components/Footer/Footer.scss";
import "../components/FormInput/FormInput.scss";
import "../components/Header/Header.scss";
import "../components/HomeComponents/Categories/Categories.scss";
import "../components/HomeComponents/Hero/Hero.scss";
import "../components/Modal/Modal.scss";
import "../components/Navbar/Backdrop/Backdrop.scss";
import "../components/Navbar/Toolbar/Toolbar.scss";

import "../components/Navbar/SideDrawer/DrawerToggleButton.scss";
import "../components/Navbar/SideDrawer/SideDrawer.scss";

import "react-quill/dist/quill.snow.css";
import "../components/AdminDashboard/AdminDashboard.scss";
import "../components/BlogCategory/BlogCategory.scss";
import "../components/auth/ActivateAccount/ActivateAccount.scss";
import "../components/auth/ForgotPassword/ForgotPassword.scss";
import "../components/auth/PasswordReset/PasswordReset.scss";
import "../components/auth/ProfileUpdate/ProfileUpdate.scss";
import "../components/auth/SigninComponent/SigninComponent.scss";
import "../components/auth/SignupComponent/SignupComponent.scss";
import "../components/blog/Blog/Blog.scss";
import "../components/blog/BlogCard/BlogCard.scss";
import "../components/blog/Blogs/Blogs.scss";
import "../components/blog/BlogsHeader/BlogsHeader.scss";
import "../components/blog/LoadMore/LoadMore.scss";
import "../components/blog/RelatedBlogCard/RelatedBlogCard.scss";
import "../components/blog/RelatedBlogs/RelatedBlogs.scss";
import "../components/blog/Search/Search.scss";
import "../components/BlogTag/BlogTag.scss";
import "../components/ContactForm/ContactForm.scss";
import "../components/ContactForm/TextareaInput/TextareaInput.scss";

import Layout from "../components/Layout";
import Hero from "../components/HomeComponents/Hero/Hero";
import Categories from "../components/HomeComponents/Categories/Categories";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
