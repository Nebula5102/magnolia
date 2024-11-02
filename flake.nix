{
  description = "Restauwants Node Flake";

  inputs = {
      nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, ... } @ inputs:
	let
	system = "x86_64-linux";
	pkgs = import inputs.nixpkgs {inherit system;};
	in {
	    devShells.${system}.node = pkgs.mkShell {
		buildInputs = with pkgs; [
		  nodejs
		  nodePackages.pnpm
		  nodePackages.typescript
		];

	    shellHook = ''
	    	echo "Entered Node Dev environment"
		kitty
		'';
	};
  };
}
