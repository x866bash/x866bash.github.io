module.exports = {
  hooks: {
    readPackage(pkg) {
      // Auto-approve esbuild dan sharp
      if (pkg.name === "esbuild" || pkg.name === "sharp") {
        pkg.scripts = pkg.scripts || {};
      }
      return pkg;
    }
  }
};
