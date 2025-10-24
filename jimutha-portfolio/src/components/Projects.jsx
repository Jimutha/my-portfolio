// src/components/Projects.jsx
import React, { useState } from "react";
import { PROJECTS } from "../data/projects";
import {
  Github,
  Link as LinkIcon,
  LayoutList,
  CheckCircle,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import WavyUnderline from "./WavyUnderline";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
  return [isHovered, hoverProps];
};

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  const [isCardHovered, cardHoverProps] = useHover();
  const [githubHover, githubProps] = useHover();
  const [liveHover, liveProps] = useHover();

  const styles = {
    card: {
      backgroundColor: theme.colors.cardBg,
      borderRadius: "0.75rem",
      overflow: "hidden",
      boxShadow: isCardHovered
        ? theme.shadows.cardHover
        : theme.shadows.cardSoft,
      transition: theme.transition,
      transform: isCardHovered ? "translateY(-6px)" : "translateY(0)",
      border: `1px solid ${theme.colors.borderLight}`,
      display: "flex",
      flexDirection: "column",
    },
    imageContainer: {
      height: "14rem",
      width: "100%",
      backgroundColor: theme.colors.borderLight,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
      transform: isCardHovered ? "scale(1.05)" : "scale(1)",
    },
    content: {
      padding: "1.25rem",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },
    tag: {
      display: "inline-block",
      padding: "0.25rem 0.75rem",
      fontSize: "0.75rem",
      fontWeight: "500",
      marginBottom: "0.75rem",
      borderRadius: "9999px",
      backgroundColor:
        theme.mode === "light"
          ? "rgba(29, 233, 182, 0.2)"
          : "rgba(29, 233, 182, 0.3)",
      color: theme.colors.accentDark,
      width: "fit-content",
    },
    name: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "0.5rem",
      fontFamily: theme.fonts.heading,
      color: theme.colors.textPrimary,
    },
    description: {
      color: theme.colors.textSecondary,
      marginBottom: "1rem",
      flexGrow: 1,
      lineHeight: 1.6,
    },
    techTitle: {
      fontSize: "0.875rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: theme.colors.textSecondary,
    },
    techContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1.25rem",
    },
    techPill: {
      padding: "0.125rem 0.75rem",
      fontSize: "0.75rem",
      fontWeight: "500",
      backgroundColor: theme.colors.background,
      color: theme.colors.textSecondary,
      borderRadius: "9999px",
      border: `1px solid ${theme.colors.borderLight}`,
    },
    linksContainer: {
      display: "flex",
      gap: "1rem",
      borderTop: `1px solid ${theme.colors.borderLight}`,
      paddingTop: "1rem",
      marginTop: "auto",
    },
    linkBase: {
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      color: theme.colors.textSecondary,
      fontWeight: "500",
      transition: "color 0.15s ease",
      textDecoration: "none",
    },
    linkHover: { color: theme.colors.accentPrimary },
  };

  return (
    <div style={styles.card} {...cardHoverProps}>
      <div style={styles.imageContainer}>
        <img
          src={project.image}
          alt={project.name}
          style={styles.image}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div style={styles.content}>
        <span style={styles.tag}>{project.tags} Project</span>
        <h3 style={styles.name}>{project.name}</h3>
        <p style={styles.description}>{project.description}</p>
        <h4 style={styles.techTitle}>Technologies Used:</h4>
        <div style={styles.techContainer}>
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} style={styles.techPill}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span style={styles.techPill}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        <div style={styles.linksContainer}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.linkBase,
              ...(githubHover ? styles.linkHover : {}),
            }}
            {...githubProps}
          >
            {" "}
            <Github size={18} /> Code{" "}
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.linkBase,
                ...(liveHover ? styles.linkHover : {}),
              }}
              {...liveProps}
            >
              {" "}
              <LinkIcon size={18} /> Live Demo{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  const allTags = ["All", "Team", "Individual"];
  const initialCount = 4;
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [seeAllHover, seeAllProps] = useHover();

  const isLargeScreen = useMediaQuery(theme.breakpoints.lg);

  const filteredProjects = PROJECTS.filter(
    (project) => activeFilter === "All" || project.tags === activeFilter
  );
  const handleSeeAll = () => setVisibleCount(filteredProjects.length);
  const handleFilterChange = (tag) => {
    setActiveFilter(tag);
    setVisibleCount(initialCount);
  };
  const projectsToDisplay = filteredProjects.slice(0, visibleCount);
  const showLoadMore = visibleCount < filteredProjects.length;

  const styles = {
    section: { padding: "6rem 0" },
    title: {
      fontSize: "2.25rem",
      fontWeight: "800",
      marginBottom: "0.5rem",
      color: theme.colors.textPrimary,
      fontFamily: theme.fonts.heading,
    },
    subtitle: {
      fontSize: "1.25rem",
      color: theme.colors.textSecondary,
      marginTop: "1.5rem",
      marginBottom: "2.5rem",
      maxWidth: "42rem",
      lineHeight: 1.6,
    },
    filterContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      marginBottom: "2.5rem",
    },
    filterPillBase: {
      padding: "0.5rem 1.25rem",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      fontWeight: "500",
      transition: theme.transition,
      cursor: "pointer",
      border: `2px solid ${theme.colors.borderGray}`,
      backgroundColor: theme.colors.cardBg,
      color: theme.colors.textSecondary,
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontFamily: theme.fonts.sans,
    },
    filterPillHover: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.accentDark,
    },
    filterPillActive: {
      backgroundColor: theme.colors.accentPrimary,
      color: theme.colors.textDark,
      borderColor: theme.colors.accentPrimary,
      boxShadow: `0 4px 10px ${
        theme.mode === "light"
          ? "rgba(29, 233, 182, 0.4)"
          : "rgba(29, 233, 182, 0.6)"
      }`,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isLargeScreen ? "repeat(2, 1fr)" : "1fr",
      gap: "2.5rem",
    },
    seeAllButtonContainer: { textAlign: "center", marginTop: "4rem" },
    buttonBase: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "0.75rem 1.5rem",
      borderRadius: "9999px",
      fontWeight: "600",
      transition: theme.transition,
      textDecoration: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
      color: theme.colors.accentPrimary,
      border: `2px solid ${theme.colors.accentPrimary}`,
      fontFamily: theme.fonts.sans,
    },
    buttonHover: {
      backgroundColor: theme.colors.accentPrimary,
      color: theme.colors.textDark,
      transform: "translateY(-2px)",
    },
  };

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Featured Work</h2>
      <WavyUnderline />
      <p style={styles.subtitle}>
        A selection of my best projects. Filter by 'Team' or 'Individual' to see
        how I collaborate and build solo.
      </p>
      <div style={styles.filterContainer}>
        {allTags.map((tag) => (
          <FilterButton
            key={tag}
            tag={tag}
            isActive={activeFilter === tag}
            onClick={() => handleFilterChange(tag)}
            styles={styles}
          />
        ))}
      </div>
      <div style={styles.grid}>
        {projectsToDisplay.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {showLoadMore && (
        <div style={styles.seeAllButtonContainer}>
          <button
            onClick={handleSeeAll}
            style={{
              ...styles.buttonBase,
              ...(seeAllHover ? styles.buttonHover : {}),
            }}
            {...seeAllProps}
          >
            <LayoutList size={20} />
            <span>See All {filteredProjects.length} Projects</span>
          </button>
        </div>
      )}
    </section>
  );
};

const FilterButton = ({ tag, isActive, onClick, styles }) => {
  const [isHovered, hoverProps] = useHover();
  const style = isActive
    ? { ...styles.filterPillBase, ...styles.filterPillActive }
    : {
        ...styles.filterPillBase,
        ...(isHovered ? styles.filterPillHover : {}),
      };
  return (
    <button onClick={onClick} style={style} {...hoverProps}>
      {" "}
      {isActive && <CheckCircle size={16} />} <span>{tag} Projects</span>{" "}
    </button>
  );
};

export default Projects;
