let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  packages = with pkgs; [
  	go
	gopls
	gotools
  ];
}
